const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();
const { getAllDogs } = require("../controllers/dogControllers");
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllDogs();
    if (name) {
      let dogName = await allDogs.filter(
        (e) => e.name.toLowerCase().includes(name.toLowerCase()) //paso los valores a minuscula y comparo
      );
      dogName.length
        ? res.status(200).send(dogName)
        : res.status(404).send("No se ha encontrado la raza");
    } else {
      res.status(200).send(allDogs);
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allDogs = await getAllDogs();
  const dog = allDogs.find((e) => e.id == id);

  if (dog) {
    res.json(dog);
  } else {
    res.status(404).send("Perro sos vos");
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      name,
      image,
      id,
      height,
      weight,
      life_span,
      temperament,
      createInDb,
    } = req.body;
    const dogCreate = await Dog.create({
      name,
      image,
      id,
      height,
      weight,
      life_span,
      createInDb,
    });

    const dogTemperament = await Temperament.findAll({
      where: {
        name: temperament,
      },
    });
    await dogCreate.addTemperament(dogTemperament);
    res.status(201).send("Perro creado ecsitosamente");
  } catch (error) {
    res.status(404).send("no se pudo crear el perro");
  }
});
module.exports = router;
