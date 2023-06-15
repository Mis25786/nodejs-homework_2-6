const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Misha:PBYK1kIejqDDfgMP@cluster0.zwlkcdj.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
