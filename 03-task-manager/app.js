const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const app = express();
require('dotenv').config() // Router from the .env

//middleware
app.use(express.json());

//routes
app.get("/api/v1/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

// connecting to the mongoose
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("CONNECTED TO THE DB...");
    // Running the port
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
