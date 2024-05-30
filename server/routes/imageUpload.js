const express = require('express');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
    const filePath = path.join(__dirname, '../uploads/', req.file.filename);

    try {
        const pythonProcess = await axios.post('http://localhost:5001/analyze', {
            file_path: filePath
        });

        fs.unlinkSync(filePath); // Delete the file after processing
        res.json(pythonProcess.data);
    } catch (error) {
        res.status(500).send('Error processing image');
    }
});

module.exports = router;
