import cv2
import numpy as np

def auto_crop(img):

    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    _, thresh = cv2.threshold(
        gray,
        1,
        255,
        cv2.THRESH_BINARY
    )

    contours, _ = cv2.findContours(
        thresh,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    largest = max(
        contours,
        key=cv2.contourArea
    )

    mask = np.zeros(
        thresh.shape,
        dtype=np.uint8
    )

    cv2.drawContours(
        mask,
        [largest],
        -1,
        255,
        -1
    )

    x, y, w, h = cv2.boundingRect(mask)

    crop = mask[y:y+h, x:x+w]

    while cv2.countNonZero(crop) < crop.size:

        crop = crop[1:-1, 1:-1]

        x += 1
        y += 1
        w -= 2
        h -= 2

        if w <= 0 or h <= 0:
            break

    return img[y:y+h, x:x+w]