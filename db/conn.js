const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log("DATABASE IS CONNECTED"))
  .catch((error) => {
    console.log(error);
  });
