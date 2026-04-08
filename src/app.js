const express = require('express');
const app = express();
const postsRoutes = require('../routes/posts');

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("working server");
});

app.use("/posts", postsRoutes);

app.listen(port, () => {
    console.log(`server listen on https://localhost:${port}`);
});