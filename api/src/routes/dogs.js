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

router.post("/", async (req, res, next) => {
  try {
    const {
      name,
      image,
      minheight,
      maxheight,
      minweight,
      maxweight,
      life_span,
      temperament,
    } = req.body;
    const dogCreate = await Dog.create({
      name,
      image,
      minheight,
      maxheight,
      minweight,
      maxweight,
      life_span,
    });
    console.log(req.body);
    temperament.forEach(async (e) => {
      let dogTemperament = await Temperament.findAll({
        where: { name: e },
      });
      await dogCreate.addTemperaments(dogTemperament);
    });

    res.status(201).send("Dog add successfully");
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});
module.exports = router;
