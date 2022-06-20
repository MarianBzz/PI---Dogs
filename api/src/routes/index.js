const { Router } = require("express");
// const Dog = require("../models/Dog");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllDogs();
    if (dog) {
      let dogName = await allDogs.filter(
        (e) => e.name.toLowerCase().includes(dog.toLowerCase()) //paso los valores a minuscula y comparo
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.status(404).send("No se ha encontrado la raza");
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
