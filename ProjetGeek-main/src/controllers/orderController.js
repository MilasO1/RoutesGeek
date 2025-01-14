const Order = require('../models/Order');

//Finaliser une commande
exports.placeOrder = async (req, res) => {
    try {
        const { userId, items, totalPrice } = req.body;
        const order = new Order({ userId, items, totalPrice });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Liste des commandes utilisateurs
exports.getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
