const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const { id } = req.params;

  const tag = await Tag.findByPk(id);
  if (!tag){
res.status(404).json({success:false, message:'not found'})
  }
  res.json({tag, success:true})
});

router.post("/", async(req, res) => {
  // create a new tag
  const tag  = await Tag.create(req.body)

  res.json({success:true, tag})
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  const {id} = req.params
const tag = await Tag.destroy(id)
});

module.exports = router;
