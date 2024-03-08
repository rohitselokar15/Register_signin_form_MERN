const express = require("express");
const { use } = require("./router/auth");
const cors = require("cors");


const app = express();
const port = 3000;
app.use(cors());

require("./db/connection");

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
