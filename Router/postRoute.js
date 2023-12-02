const express = require("express");
const {
  createItem,
  readItems,
  updateItem,
  deleteItem,
} = require("../Controllers/postController");
const router = express.Router();

router.post("/createPost", createItem);
router.get("/getPosts", readItems);
router.put("/updatePost", updateItem);
router.delete("/deletePost", deleteItem);

module.exports = router;
