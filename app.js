const express = require('express');
const multer = require('multer');
const { generalStorage } = require(storagePath);
const app = express();

//-----------------------------------------
//             Temporary paths
//-----------------------------------------

// The js with the multer functions
const storagePath = './storage.js';

//-----------------------------------------
//            Temporary paths end
//-----------------------------------------

// Sets up Multer middleware
const upload = multer({ storage: generalStorage });

// Route for handling file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File was uploaded successfully to the server!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
