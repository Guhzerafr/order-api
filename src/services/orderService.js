let orders = [];

function createOrder(order) {
    orders.push(order);
    return order;
}

function getOrder(id) {
    return orders.find(o => o.id === id);
}

function updateOrder(id, data) {

    const index = orders.findIndex(o => o.id === id);

    if (index === -1) return null;

    orders[index] = { ...orders[index], ...data };

    return orders[index];
}

function deleteOrder(id) {

    const index = orders.findIndex(o => o.id === id);

    if (index === -1) return false;

    orders.splice(index, 1);

    return true;
}

module.exports = {
    createOrder,
    getOrder,
    updateOrder,
    deleteOrder
};