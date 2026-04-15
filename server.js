const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API funcionando.' }));

app.use('/api/entries', require('./routes/listaRoutes'));

mongoose.connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(process.env.PORT || 3000, () =>
      console.log(`Servidor rodando`)
    )
  );


  // comandos: cd pasta
  // node server.js