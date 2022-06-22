const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minweight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    maxweight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    minheight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maxheight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    life_span: {
      type: DataTypes.STRING,
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
