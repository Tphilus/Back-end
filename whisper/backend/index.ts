import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on PORT", PORT);
    });
  })
  .catch((error) => {
    console.log("Fail to start server", error);
    process.exit(1);
  });
