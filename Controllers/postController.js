const postModel = require("../Model/schema");

// Create a Item
exports.createItem = async (req, res) => {
  try {
    const newPost = new postModel(req.body);
    const savedItem = await newPost.save();
    res.json(savedItem);
  } catch (error) {
    res.status(500).json({ error: error.message });

    res.status(404).json({ message: err.message });
  }
};

// Read all Items
exports.readItems = async (req, res) => {
  try {
    const items = await postModel.find();
    if (!items) {
      throw new Error("No items found");
    }
    res.json(items);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
  // Get the id from params
  let id = req.params.id;
  // Find and update the item with that id
  let updatedItem = await postModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  // If no item is returned send a 404 status code
  if (!updatedItem) {
    return res.status(404).send();
  }
  // Send back the updated item as json
  res.json(updatedItem);
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
  let id = req.params.id;
  let deletedItem = await postModel.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).send();
  }
  res.json(deletedItem);
};

