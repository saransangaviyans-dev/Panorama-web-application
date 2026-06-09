import cv2

from stitcher import stitch_images

paths = [
    "./dataset/sample1.jpg",
    "./dataset/sample2.jpg"   
]





from auto_crop import auto_crop

result = stitch_images(paths)



panorama = result["panorama"]

panorama = auto_crop(
    panorama
)

cv2.imwrite(
    "./results/panorama_cropped.jpg",
    panorama
)


print("Panorama saved")


print("\n      STITCH REPORT     ")

print(
    f"Images Used : {result['images_used']}"
)

print(
    f"Execution Time : {result['execution_time']} sec"
)

print(
    f"Output Width : {result['output_width']}"
)

print(
    f"Output Height : {result['output_height']}"
)

print(
    f"Status : {result['status']}"
)

print("Saved Successfully")