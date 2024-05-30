const express = require('express');
const bodyParser = require('body-parser');
const imageUploadRoute = require('./routes/imageUpload');

const app = express();

app.use(bodyParser.json());
app.use('/api/upload', imageUploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
