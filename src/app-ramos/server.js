const express = require('express');
const app = express();
const port = 8080;

// Endpoint raíz
app.get('/', (req, res) => {
  res.send('Aplicación del ramo funcionando en k3s');
});

// Endpoint de salud
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'app-ramos' });
});

app.listen(port, () => {
  console.log(`App del ramo escuchando en puerto ${port}`);
});


