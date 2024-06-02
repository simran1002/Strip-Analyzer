import cv2
import numpy as np
import json
from flask import Flask, request

app = Flask(__name__)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    file_path = data['file_path']
    
    # Load the image
    image = cv2.imread(file_path)
    
    # Assume the strips are in a vertical orientation, and there's 10 strips
    # This is a simplified assumption; proper strip detection logic should be more robust.
    strip_height = image.shape[0] // 10
    
    colors = {}
    labels = ['URO', 'BIL', 'KET', 'BLD', 'PRO', 'NIT', 'LEU', 'GLU', 'SG', 'PH']
    
    for i in range(10):
        strip_region = image[i * strip_height:(i + 1) * strip_height, :]
        avg_color = strip_region.mean(axis=0).mean(axis=0)
        # Convert average color values to list of integers
        colors[labels[i]] = [int(val) for val in avg_color]
    
    response_str = "{\n"
    for label, rgb in colors.items():
        response_str += f'    "{label}": {rgb},\n'
    
    # Remove the trailing comma and add closing brace
    response_str = response_str.rstrip(",\n") + "\n}"
    
    return response_str

if __name__ == '__main__':
    app.run(port=5001)
