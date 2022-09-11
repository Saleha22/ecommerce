const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll();
  res.json({ tags, success: true });
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const { id } = req.params;

  const tag = await Tag.findByPk(id);
  if (!tag) {
    res.status(404).json({ success: false, message: "not found" });
  }
  res.json({ tag, success: true });
});

router.post("/", async (req, res) => {
  // create a new tag
  const tag = await Tag.create(req.body);

  res.json({ success: true, tag });
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // get id from req params
    const tag = req.params.id;
    //  update tag using category model
    const updateTag = await Tag.update(req.body, {
      where: {
        id: tag,
      },
    });
    // return response
    return res.json({
      data: updateTag,
      status: 200,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to update a tag | ${error.message}`);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = req.params.id;
    const deleteTag = await Tag.destroy({
      where: { id: tag },
    });
    return res.json({ data: deleteTag, status: 200 });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
