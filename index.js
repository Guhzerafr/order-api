const express = require('express');
const orderRoutes = require('./src/routes/orderRoutes');
const { swaggerUi, specs } = require('./src/docs/swagger');

const app = express();

app.use(express.json());

app.use(orderRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});