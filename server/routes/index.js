import express from 'express';
import path from 'path';
import ssr from './ssr';

const app = express();

app.set('view engine', 'ejs');

app.use('/js', express.static('public/js'));

app.use('/', ssr);

app.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
