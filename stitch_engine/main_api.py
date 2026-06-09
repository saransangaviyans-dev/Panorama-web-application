import cv2
from fastapi import FastAPI, UploadFile, File
import os
import shutil

from fastapi.staticfiles import StaticFiles

from auto_crop import auto_crop
from stitcher import stitch_images
import uuid

app = FastAPI()

app.mount("/results",
          StaticFiles(directory="results"),
          name="results")

@app.post("/upload")
async def upload(
    file: UploadFile = File(...)
):
    os.makedirs(
        "uploads",exist_ok=True
    )

    save_path = os.path.join("uploads",file.filename)

    with open(save_path,"wb") as buffer:
        shutil.copyfileobj(file.file,buffer)

    return {
        "filename": file.filename, 
        "save_path":save_path
    }   

@app.get("/")
def home():

    return {
        "message": "Panorama API Running"
    }

@app.get("/health")
def health():
    return {"status":"Stitching"}


@app.get("/stitch-test")
def stitch_test():
    return {
        "message" : "stitch_images imported successfully"
    }


@app.post("/stitch")
async def stitch(
    file1: UploadFile = File(...),
    file2: UploadFile = File(...)
):

    os.makedirs(
        "uploads",
        exist_ok=True
    )

    path1 = os.path.join("uploads",file1.filename)
    path2 = os.path.join("uploads",file2.filename)

    with open(path1,"wb") as buffer:
        shutil.copyfileobj(file1.file,buffer)

    with open(path2,"wb") as buffer:
        shutil.copyfileobj(file2.file,buffer)

    paths =[path1,path2]

    try:

        result = stitch_images(paths)

    except Exception as e:

        return {
            "status" : "error",
            "message" : str(e)
        }

    finally:

        for path in paths:

            if os.path.exists(path):

                os.remove(path)

    panorama = result["panorama"]

    panorama = auto_crop(
    panorama
    )

    filename = f"{uuid.uuid4()}.jpg"

    result_path = os.path.join(
        "results",
        filename
    )

    cv2.imwrite(
        result_path,
        panorama
    )

    
    return {
     "status": result["status"],
    "image_url": f"/results/{filename}",
    "images_used": result["images_used"],
    "execution_time": result["execution_time"]
    }
