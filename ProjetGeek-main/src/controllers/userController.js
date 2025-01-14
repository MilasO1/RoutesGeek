const User = require("../models/User");
const connectDb = require('../config/db');
const bcrypt = require("bcrypt")

// Récuperer les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: `Erreur lors de la récupération des utilisateurs`,
      error,
    });
  }
};

//Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
        const passMatch = (user) ? await bcrypt.compare(password, user.password) : false;    
        if (!passMatch) {
      res.status(404).json({ message: `Utilisateur non trouvé` });
    } else res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la connexion`, error });
  }
};

//Log out
exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: `Utilisateur déconnecté` });
  } catch (error) {
    res.status(500).json({ message: `Erreur lors de la deconnexion, error` });
  }
};

// Créer un utilisateur
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: `Erreur lors de la création de l'utilisateur `, error });
  }
};

// Supprimer un utilisateur
exports.removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: `Utilisateur supprimé`, user });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Erreur lors de la suppression de l'utilisateur`, err });
  }
};
