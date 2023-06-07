const Brand = require("../models/brandModel");

// Controller for creating a brand
const createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const createdBrand = await brand.save();
    res.status(201).json(createdBrand);
  } catch (error) {
    res.status(500).json({ error: "Failed to create brand" });
  }
};

// Controller for getting all brands
const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: "Failed to get brands" });
  }
};

// Controller for getting a brand by ID
const getBrandById = async (req, res) => {
  const { id } = req.params;
  try {
    const brand = await Brand.findById(id);
    if (brand) {
      res.status(200).json(brand);
    } else {
      res.status(404).json({ error: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get brand" });
  }
};

// Controller for updating a brand
const updateBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
    if (updatedBrand) {
      res.status(200).json(updatedBrand);
    } else {
      res.status(404).json({ error: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update brand" });
  }
};

// Controller for deleting a brand
const deleteBrand = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBrand = await Brand.findByIdAndDelete(id);
    if (deletedBrand) {
      res.status(200).json({ message: "Brand deleted successfully" });
    } else {
      res.status(404).json({ error: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete brand" });
  }
};

module.exports = {
  createBrand,
  getAllBrands,
  getBrandById,
  updateBrand,
  deleteBrand,
};
