const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname + "/build")));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("app listening on port:", port);
});
