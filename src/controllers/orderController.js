const service = require('../services/orderService');
const { mapOrder } = require('../utils/orderMapper');

function create(req, res) {

    const mapped = mapOrder(req.body);

    const order = service.createOrder(mapped);

    res.status(201).json(order);
}

function get(req, res) {

    const order = service.getOrder(req.params.id);

    if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
    }

    res.json(order);
}

function update(req, res) {

    const order = service.updateOrder(req.params.id, req.body);

    if (!order) {
        return res.status(404).json({ error: "Pedido não encontrado" });
    }

    res.json(order);
}

function remove(req, res) {

    const success = service.deleteOrder(req.params.id);

    if (!success) {
        return res.status(404).json({ error: "Pedido não encontrado" });
    }

    res.status(204).send();
}

module.exports = { create, get, update, remove };