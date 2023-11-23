const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
const app = express();

app.use(session({
  secret: 'dihasoohdisajjdosadad7558e4ad78',
  resave: false,
  saveUninitialized: false
}));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); // Correção: 'ejs' é o mecanismo de visualização
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views')); // Correção: Caminho corrigido

app.post('/', (req, res) => {
  console.log(req.body.login);
  res.render('index');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port);
});
