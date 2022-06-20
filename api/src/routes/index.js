const { Router } = require("express");
const dogs = require("./dogs");
const temperament = require("./temperament");
// const Dog = require("../models/Dog");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

router.use("/dogs", dogs);
router.use("/temperaments", temperament);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
