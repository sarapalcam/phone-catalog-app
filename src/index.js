const express = require("express");
const cors = require("cors");
const data = require("./data/phones.json")

const server = express();
server.use(cors());
server.use(express.json());

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/phones', (req, res) => {
    res.json(data)
})

const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

const staticServerPathImages = "./src/public-phones-images";
server.use(express.static(staticServerPathImages));