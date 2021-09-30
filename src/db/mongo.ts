import mongoose from "mongoose";

function initDB () {
  mongoose.connect(process.env.MONGO_URL || "mongodb://root:docker@mongo:27017/")
    .then(() => console.log("database is on")).catch((err) => console.error(err));
}

export { initDB };
