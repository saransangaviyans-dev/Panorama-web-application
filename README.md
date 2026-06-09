# Panorama Stitching Service

## Project Overview

A web-based panorama stitching application that combines multiple overlapping images into a single panoramic image using OpenCV. The image processing engine is exposed through a FastAPI service and is designed to be integrated with a MERN stack application.

## Features

* Upload multiple overlapping images
* Generate panoramic images automatically
* Automatic cropping of black borders
* Unique panorama generation using UUID filenames
* FastAPI-based image processing service
* Error handling for invalid image combinations
* Temporary file cleanup after processing
* Panorama history support (planned)

## Tech Stack

### Frontend

* React.js

### Backend

* Node.js
* Express.js
* FastAPI

### Database

* MongoDB

### Computer Vision

* OpenCV
* Python

## Project Structure

stitch_engine/

* dataset/
* uploads/
* results/
* auto_crop.py
* stitcher.py
* main.py
* main_api.py

## API Endpoints

### GET /

Returns API status.

### GET /health

Health check endpoint.

### POST /stitch

Uploads images, generates a panorama, and returns the panorama URL.

## How To Run

### Install Dependencies

pip install -r requirements.txt

### Start FastAPI Server

cd stitch_engine

uvicorn main_api:app --reload

### Open Swagger Documentation

http://127.0.0.1:8000/docs

## Future Improvements

* Multi-image upload support
* Express to FastAPI integration
* MongoDB panorama history
* User authentication
* Cloud deployment
* Image download functionality

## Author

Saran Sangaviyan
