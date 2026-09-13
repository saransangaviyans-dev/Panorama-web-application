# Panorama Studio

A web-based panorama stitching application that combines multiple overlapping images into a single panoramic image using OpenCV.

Panorama Studio uses a React frontend, Node.js/Express backend, and a separate Python FastAPI service for computer vision processing.

---

## Project Overview

Panorama Studio allows users to upload multiple overlapping images and generate a panoramic image through an automated image stitching workflow.

The application separates the frontend, backend, database, and computer vision processing into different components.

---

## Features

- Upload multiple overlapping images
- Generate panoramic images automatically
- OpenCV-based panorama stitching
- FastAPI-based computer vision service
- React-based interactive frontend
- Express.js backend API
- Individual file removal before processing
- Loading and error handling
- Generated panorama preview
- Display images used and execution time
- Download generated panorama
- Unique filenames for generated panoramas
- Temporary upload file cleanup
- MongoDB Atlas integration for panorama metadata

---

## Architecture

    User
      |
      v
    React Frontend
    (Vite + Tailwind)
      |
    HTTP / FormData
      |
      v
    Node.js + Express
    Backend API
      |
      +----------------------+
      |                      |
      v                      v
    Python FastAPI       MongoDB Atlas
    Computer Vision         Database
    Service
      |
      v
    OpenCV
      |
      v
    Panorama Generation
      |
      v
    Generated Image
      |
      v
    FastAPI
      |
      v
    Express
      |
      v
    React
      |
      +-------------+
      |             |
      v             v
    Preview      Download

---

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Lucide React

### Backend

- Node.js
- Express.js

### Computer Vision

- Python
- FastAPI
- OpenCV
- NumPy

### Database

- MongoDB Atlas
- Mongoose

### Development Tools

- Git
- GitHub
- VS Code

---

## Computer Vision Pipeline

The application is based on the standard panorama stitching workflow:

    Input Images
         |
         v
    Feature Detection
         |
         v
    Feature Matching
         |
         v
    Homography Estimation
         |
         v
    Outlier Rejection
         |
         v
    Image Alignment
         |
         v
    Blending
         |
         v
    Panorama

The final v1 implementation uses OpenCV's Stitcher API for the end-to-end panorama stitching process.

The project also explores the underlying concepts of:

- SIFT feature detection
- Feature matching
- Homography estimation
- RANSAC-based outlier rejection
- Image warping and alignment
- Image blending

---

## Project Structure

    Panorama-web-application/
    │
    ├── frontend/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── Hero.jsx
    │   │   │   ├── UploadCard.jsx
    │   │   │   ├── UploadArea.jsx
    │   │   │   ├── SelectedFiles.jsx
    │   │   │   ├── UploadButton.jsx
    │   │   │   ├── ResultCard.jsx
    │   │   │   └── Footer.jsx
    │   │   ├── App.jsx
    │   │   └── index.css
    │   ├── package.json
    │   └── ...
    │
    ├── backend/
    │   ├── models/
    │   ├── routes/
    │   ├── server.js
    │   ├── package.json
    │   └── ...
    │
    └── stitch_engine/
        ├── dataset/
        ├── uploads/
        ├── results/
        ├── auto_crop.py
        ├── main.py
        ├── main_api.py
        ├── stitcher.py
        └── requirements.txt

---

## API Endpoints

### Express Backend

#### POST `/api/stitch`

Receives multiple images from the React frontend and forwards them to the FastAPI stitching service.

#### GET `/api/history`

Retrieves panorama metadata stored in MongoDB.

History functionality can be expanded with authentication and a user dashboard in a future version.

### FastAPI Service

#### GET `/`

Returns the API status.

#### GET `/health`

Returns the health status of the stitching service.

#### POST `/stitch`

Processes uploaded images and generates a panorama.

The response includes:

- Generated filename
- Panorama URL
- Number of images used
- Execution time
- Processing status

---

## How It Works

1. The user selects multiple overlapping images in the React frontend.
2. React stores the selected files as JavaScript `File` objects.
3. React creates a `FormData` object containing the images.
4. React sends the images to the Express `/api/stitch` endpoint.
5. Express receives the request and forwards the images to the FastAPI service.
6. FastAPI receives the uploaded images.
7. OpenCV processes the images and generates the panorama.
8. The generated panorama is saved as an output file.
9. FastAPI returns the generated filename, image URL, image count, execution time, and processing status.
10. Express sends the response back to React.
11. React displays the generated panorama and provides a download option.

---

## Local Setup

### 1. Clone the Repository

    git clone https://github.com/saransangaviyans-dev/Panorama-web-application.git
    cd Panorama-web-application

### 2. Start the FastAPI Service

    cd stitch_engine
    pip install -r requirements.txt
    uvicorn main_api:app --reload

FastAPI will run on:

    http://127.0.0.1:8000

Swagger API documentation:

    http://127.0.0.1:8000/docs

### 3. Start the Express Backend

Open another terminal:

    cd backend
    npm install
    npm start

The Express server runs on the configured backend port.

### 4. Start the React Frontend

Open another terminal:

    cd frontend
    npm install
    npm run dev

The React development server runs using Vite.

---

## Environment Variables

Sensitive configuration should be stored using environment variables.

Example:

    MONGODB_URI=your_mongodb_connection_string
    FASTAPI_URL=http://127.0.0.1:8000

Do not commit `.env` files to GitHub.

---

## Error Handling

The application handles errors at multiple levels.

### Frontend

- Displays error messages to the user
- Shows loading state during panorama generation
- Provides feedback when processing fails

### Express Backend

- Handles API errors
- Handles communication errors with the FastAPI service
- Handles database operation errors

### FastAPI

- Handles uploaded image processing
- Handles stitching failures
- Returns processing status and error responses

---

## Database

MongoDB Atlas is used to store panorama-related metadata.

Example metadata includes:

    filename
    image_url
    images_used
    execution_time
    createdAt
    updatedAt

The actual panorama image is stored as a generated output file rather than as binary image data inside MongoDB.

---

## Git and GitHub

Git is used for version control and GitHub is used to host the project repository.

Sensitive and generated files are excluded using `.gitignore`.

Example:

    node_modules/
    venv/
    .env
    __pycache__/
    *.pyc

---

## Future Improvements

- User authentication
- User-specific panorama history
- Panorama dashboard
- Improved automatic cropping
- Drag-and-drop image upload
- Image thumbnails before processing
- Better validation for incompatible image sets
- Performance optimization for large image sets
- Cloud deployment

---

## Version

**v1.0**

The current version focuses on the core panorama generation workflow and integration between React, Express, FastAPI, OpenCV, and MongoDB Atlas.

---

## Author

**Saran Sangaviyan**

GitHub: https://github.com/saransangaviyans-dev

LinkedIn: https://www.linkedin.com/in/saran-sangaviyan-s-14a0a0301
