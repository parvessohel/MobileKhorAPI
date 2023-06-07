const express = require("express");
const { createBrand, getAllBrands, getBrandById, updateBrand, deleteBrand } = require("../controller/brandController");



const router = express.Router();

// Routes for brands
router.post("/", createBrand);
router.get("/", getAllBrands);
router.get("/:id", getBrandById);
router.put("/:id",updateBrand);
router.delete("/:id", deleteBrand);

module.exports = router;
