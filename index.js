const express = require('express');

const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

app.use(express.json());

app.use(orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});