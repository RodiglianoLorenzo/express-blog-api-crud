const express = require("express");
const router = express.Router();
const {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    patchPost,
    deletePost,
} = require("../controllers/postsController");

router.get("/", getAllPosts);
router.get("/:id", getPostById);
router.post("/", createPost);
router.put("/:id", updatePost);
router.patch("/:id", patchPost);
router.delete("/:id", deletePost);

module.exports = router;
