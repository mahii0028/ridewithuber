const mongoose = require("mongoose");

const connectToDataBase = () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectToDataBase;
