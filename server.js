const app = require("./app");
const config = require("./app/config");
const mongoose = require("mongoose");

// start serser

// Connect database
// Set up default mongoose connection
async function startServer () {
  const mongoDB = config.db.uri;
  mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Get the default connection
  const db = mongoose.connection;
  // Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));

  // db.once('open', () => console.log('Connected to Database'));
  db.once("open", () => console.log("Connected to Database"));

  const port = config.app.port;
  app.listen(port, () => {
    console.log(`Server listening ${port}`);
  });
};

startServer();

