const { Router } = require("express");
const axios = require("axios");
// const Dog = require("../models/Dog");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Dog, Temperament } = require("../db");
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      name: e.name,
      image: e.image,
      id: e.id,
      height: e.height,
      weight: e.weight,
      life_span: e.life_span,
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      trought: {
        attributes: [],
      },
    },
  });
};

const getAllDogs = async () => {
  const apiInfo = getApiInfo();
  const dbInfo = getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

router.get("/dogs", async (req, res) => {
  const dog = req.query.name;
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
});
module.exports = router;
