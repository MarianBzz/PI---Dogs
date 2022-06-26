const axios = require("axios");
const { Temperament, Dog } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.thedogapi.com/v1/breeds?limit=100`
  );
  const apiInfo = await apiUrl.data.map((e, i) => {
    if (i > 2) {
      return {
        name: e.name,
        image: e.image.url,
        id: e.id,
        minweight: Number(e.weight.metric.slice(0, 2)),
        maxweight: Number(e.weight.metric.slice(4)),
        minheight: Number(e.height.metric.slice(0, 2)),
        maxheight: Number(e.height.metric.slice(4)),
        life_span: e.life_span,
        temperament: e.temperament,
      };
    }
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
