# Strip Analyzer

Strip Analyzer is a Flask application that analyzes vertical strips in an image and returns average color values for each strip.

## Prerequisites

- Python 3.7+
- pip (Python package installer)
- Postman (for testing the API)

## Installation

1. Clone the repository:

   git clone https://github.com/simran1002/Strip-Analyzer.git
   
   cd stripAnalyzer


## Set up a virtual environment:

python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

## Install dependencies:

pip install -r requirements.txt

## Usage

Start the Flask server:

python analyzeImage.py


## Send a POST request to analyze an image:

URL: http://localhost:5001/analyze
Body: JSON with the image file path:
json

{
    "file_path": "/path/to/your/image.jpg"
}


Example
To analyze an image named image.jpg located in the strip_images directory:

curl -X POST -H "Content-Type: application/json" -d '{"file_path": "strip_images/image.jpg"}' http://localhost:5001/analyze
