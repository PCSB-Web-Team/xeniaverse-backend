const express = require("express");
const Router = require("./routers");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api", Router);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, function () {
  console.log("Server is up and running at port:", port);
});