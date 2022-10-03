const { DataTypes } = require("sequelize");
const sequelize = require("../infra/dbSequelize");

const VehicleModel = sequelize.define(
    "VehicleModel",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: "vehicles",
        schema: "public",
    }
);

module.exports = VehicleModel;