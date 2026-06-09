import cv2
import time

def stitch_images(image_paths):

    images = []

    for path in image_paths:

        img = cv2.imread(path)

        if img is None:
            raise Exception(
                f"Cannot load image: {path}"
            )

        images.append(img)

    stitcher = cv2.Stitcher_create(
        cv2.Stitcher_PANORAMA
    )

    start = time.time()

    status, panorama = stitcher.stitch(images)

    end = time.time()

    if status != cv2.Stitcher_OK:

        raise Exception(
            f"Stitching failed. Status={status}"
        )

    print(
        f"Execution Time: {end-start:.2f} seconds"
    )

    print(
        f"Images Used : {len(images)}"
    )

    print(
        f"Panorama Shape : {panorama.shape}"
    )

    return {
        "panorama": panorama,
        "images_used": len(images),
        "execution_time": round(end - start, 2),
        "output_width": panorama.shape[1],
        "output_height": panorama.shape[0],
        "status": "success"
    }