import { AuthController } from "../controllers/auth.controller";
import { AuthService } from "../controllers/services/auth.service";

const authService = new AuthService();
const authController = new AuthController(authService);

export { authService, authController };
