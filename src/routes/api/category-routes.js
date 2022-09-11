const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", `product_name`, "price", "category_id"],
        },
      ],
    });
    // be sure to include its associated Products
    return res.json({
      data: categories,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  } // find all categories
  // be sure to include its associated Products
});

router.get("/:id", async (req, res) => {
  try {
    // get id from req params
    const categoryId = req.params.id;
    // find one category by its `id` value
    const category = await Category.findByPk(categoryId, {
      include: [
        {
          model: Product,
          attributes: [`product_name`, "price", "category_id"],
        },
      ],
    });
    // return response
    return res.send({
      data: category,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  try {
    // get the payload from req body
    const { category_name } = req.body;
    // create a new category using category model
    const newCategory = await Category.create(req.body);
    // return response
    return res.send({
      data: newCategory,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  } // create a new category
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    // get id from req params
    const category = req.params.id;
    // update a category using category model
    const updateCategory = await Category.update(req.body, {
      where: {
        id: category,
      },
    });
    // return response
    return res.json({
      data: updateCategory,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get categories by id | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // get id from req params
    const category = req.params.id;
    // delete a category using category model
    const deleteCategory = await Category.destroy({
      where: {
        id: category,
      },
    });
    return res.json({
      data: deleteCategory,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  } // delete a category by its `id` value
});

module.exports = router;
