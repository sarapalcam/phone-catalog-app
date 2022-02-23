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

//Success error
server.get('/phones', (req, res) => {
    res.json(data)
})

//run buid
const staticServerPath = "./src/public-react";
server.use(express.static(staticServerPath));

