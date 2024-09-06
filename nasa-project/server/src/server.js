const http = require("http");
const app = require("./app");

const { loadPlantsData } = require("./models/planets.model");

// PORT NUMBER
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlantsData();
  // SERVER
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
