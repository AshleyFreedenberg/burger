const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require("./controllers/burgers_controller");

app.use(router);

app.listen(PORT, () => {
  console.log(`App now listening at localhost:${PORT}`);
});