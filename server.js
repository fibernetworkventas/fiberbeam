const express = require('express');
const multer = require('multer');
const { MongoClient, GridFSBucket } = require('mongodb');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

const url = 'mongodb://localhost:27017';
const dbName = 'fileDB';

MongoClient.connect(url).then(client => {
  const db = client.db(dbName);
  const bucket = new GridFSBucket(db);

  app.post('/upload', upload.single('file'), (req, res) => {
    const uploadStream = bucket.openUploadStream(req.file.originalname);
    fs.createReadStream(req.file.path)
      .pipe(uploadStream)
      .on('error', err => res.status(500).send(err.message))
      .on('finish', () => {
        fs.unlinkSync(req.file.path);
        res.send('File uploaded');
      });
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server listening on ${port}`));
}).catch(err => console.error(err));
