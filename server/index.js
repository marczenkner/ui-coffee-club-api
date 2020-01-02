import express from 'express';
import dbConfig from './config/dbConfig';
import middleWareConfig from './config/middleware';
import { routes } from './modules/index';
import cors from 'cors';
// Imports for image-uploader
// import path from 'path';
// import formidable from 'formidable';
// import fs from 'fs';

const PORT = process.env.PORT || 5000;

const app = express();

dbConfig();

middleWareConfig(app);

app.use(cors());
app.use('/api', routes);

// app.post('/upload', (req, res) => {
//   // create an incoming form object
//   const form = new formidable.IncomingForm();
//
//   // specify that we want to allow the user to upload multiple files in a single request
//   form.multiples = true;
//
//   // store all uploads in the /uploads directory
//   form.uploadDir = path.join(__dirname, '/uploads');
//
//   // every time a file has been uploaded successfully,
//   // rename it to it's orignal name
//   form.on('file', (field, file) => {
//     fs.rename(file.path, path.join(form.uploadDir, file.name));
//   });
//
//   // log any errors that occur
//   form.on('error', (err) => {
//     console.log(`An error has occured: \n${err}`);
//   });
//
//   // once all the files have been uploaded, send a response to the client
//   form.on('end', () => {
//     res.end('success');
//   });
//
//   // parse the incoming request containing the form data
//   form.parse(req);
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});
