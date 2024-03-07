const express = require("express");
const { use } = require("./router/auth");

const app = express();
const port = 3000;

require("./db/connection");

app.use(express.json());

// we link the router files to make our route easy
app.use(require("./router/auth"));

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
