/** @format */

express = require("express");
path = require("path");
app = express();

app.use("/", express.static(path.join(__dirname, "/dist")));

app.all("*", (req, res) => {
  res.status(200).sendfile(__dirname + "/dist/index.html");
});

app.listen(2000, () => {
  console.log("Server is working.... :)");
});
