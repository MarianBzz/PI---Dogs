const { Router } = require("express");
const { Dog, Temperament } = require("../db");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const allDogs = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const findTemperament = allDogs.data
      .map((e) => e.temperament)
      .join(", ")
      .split(", ");

    findTemperament.forEach((e) => {
      Temperament.findOrCreate({
        where: { name: e },
      });
    });

    const dogTemperament = await Temperament.findAll();
    res.send(dogTemperament);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
