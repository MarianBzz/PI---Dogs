const { router } = require("express");
const { router } = require("../app");
const { Dog, Temperament } = require("../db");
const router = router();
const { getAllDogs } = require("../controllers/dogControllers");
const axios = require("axios");
