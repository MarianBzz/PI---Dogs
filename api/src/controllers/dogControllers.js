const axios = require("axios");
const { Temperament, Dog } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?limit=25`
  );
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      name: e.name,
      image: e.image.url,
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
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

module.exports = { getAllDogs, getDbInfo, getApiInfo };
