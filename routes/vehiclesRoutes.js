const { Router } = require("express");
const router = Router();
const VehiclesController = require("../controllers/vehiclesController");

// Create - Criando um veiculo
router.post("/", VehiclesController.createVehicle);

// Read - Pegando os veiculos
router.get("/", VehiclesController.getAllVehicles);

// Read - Pegando um veiculo
router.get("/:id", VehiclesController.getVehicleById);

// Update - Atualizando um veiculo (total ou parcial)
router.patch("/:id", VehiclesController.updateVehicle);

// Delete - Excluindo um veiculo
router.delete("/:id", VehiclesController.removeVehicle);

module.exports = router;
