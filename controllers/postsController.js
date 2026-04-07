const getAllPosts = (req, res) => {
    res.send("Lista dei post");
};

const getPostById = (req, res) => {
    res.send(`Dettaglio post ${req.params.id}`);
};

const createPost = (req, res) => {
    res.send("Creazione post");
};

const updatePost = (req, res) => {
    res.send(`Modifica totale post ${req.params.id}`);
};

const patchPost = (req, res) => {
    res.send(`Modifica parziale post ${req.params.id}`);
};

const deletePost = (req, res) => {
    res.send(`Eliminazione post ${req.params.id}`);
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    patchPost,
    deletePost,
};
