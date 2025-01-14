const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const userRoutes = require("./src/routes/userRoutes");
const annonceRoutes = require('./src/routes/annonceRoute');
const cartRoutes = require('./src/routes/cartRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const donationRoutes = require('./src/routes/donationRoutes');
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(`/api/users`, userRoutes);
app.use(`/api/ads`, annonceRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/donations', donationRoutes);


app.listen(PORT, () => {
  console.log(`Le serveur tourne sous http://localhost:${PORT}`);
});
