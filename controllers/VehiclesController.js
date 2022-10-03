const { Op } = require("sequelize"); // Op de Operator, que são os operadores que conseguimos usar
const VehicleModel = require("../models/vehicle");

class VehiclesController {

    createVehicle(req, res) {
        // const { ulid } = require("ulid");
        // const data = { ...req.body, id: ulid() };
        const data = req.body

        VehicleModel.create(data)
            .then(() => res.status(201).json(data))
            .catch((err) => res.status(500).json({ error: err }));
    }

    getAllVehicles(req, res) {
        VehicleModel.findAll()
            .then((result) => res.status(200).json(result))
            .catch((err) => res.status(500).json({ error: err }));
    }

    getVehicleById(req, res) {
        const { id } = req.params;

        VehicleModel.findOne({ where: { id } })
            .then((result) => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: `vehicle not found` });
                }
            })
            .catch((err) => res.status(500).json({ error: err }));
    }

    updateVehicle(req, res) {
        const { id } = req.params;

        VehicleModel.update(req.body, { where: { id } })
            .then(() => res.status(204).end())
            .catch(() => res.status(500).json({ error: err }));
    }

    removeVehicle(req, res) {
        const { id } = req.params;
        VehicleModel.destroy({ where: { id } })
            .then((result) => {
                if (result) {
                    res.status(204).end();
                } else {
                    res.status(404).json({ message: `vehicle not found` });
                }
            })
            .catch((err) => res.status(500).json({ error: err }));
    }
}

module.exports = new VehiclesController();
