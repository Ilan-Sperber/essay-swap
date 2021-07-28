const express = require('express');
const app = express();
const PORT = 8080;

app.get('/rate/:place', (req, res) => {
  switch (req.params.place) {
    case 'veggie_crust': case 'veggiecrust':
      res.status(200).send('<h1>pretty firckin awesome</h1>');
      break;
    case 'north_korea': case 'northkorea':
      res.status(200).send('<h1>Would not reccomend</h1>');
      break;
    default:
      res.status(404).send('<h1>That place does not exist</h1>');
  }
});

app.get('/rate', (req, res) => {
  res.status('404').send('<h1>Put a place at the end silly</h1>');
});

app.get('/', (req, res) => {
  res.send('root');
});

app.get('/authorize', (req, res) => {
  res.status(200).send('<h1 style="color: red;">FUCK OFF</h1>');
});

app.get('/menu', (req, res) => {
  res.send({ food: false, drinks: false, death: true });
});

app.listen(PORT, () => console.log(':)'));

// const express = require('express');
// const multer = require('multer');
// const upload = multer({
//   dest: 'uploads/' // this saves your file into a directory called "uploads"
// });

// const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // It's very crucial that the file name matches the name attribute in your html
// app.post('/', upload.single('file-to-upload'), (req, res) => {
//   res.redirect('/');
// });

// app.listen(3000);