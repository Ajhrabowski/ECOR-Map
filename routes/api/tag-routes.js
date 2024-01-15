const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findAll({
      include: [{ model: ProductTag }, { model: Product }],
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = Tag.findByPk(req.params.id, {
      include: [{ model: ProductTag }, { model: Product }],
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  router.put('/:id', (req, res) => {
    try {
      const tagData = Tag.create(req.body);
      res.status(200).json(tagData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
