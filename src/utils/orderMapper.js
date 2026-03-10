function mapOrder(input) {
    return {
        id: input.numeroPedido,
        total: input.valorTotal,
        currency: "BRL",
        createdAt: new Date()
    };
}

module.exports = { mapOrder };