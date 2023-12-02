const express = require("express");
const cors = require("cors");
const router = require("./Router/postRoute");
require("./db");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/sasi", router)

const port = 3001;
app.listen(port, () => {
  console.log("Server is running on the port", port);
});
