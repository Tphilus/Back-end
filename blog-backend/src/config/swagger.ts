import swaggerJsDoc from "swagger-jsdoc";

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Blog Api",
      version: "1.0.0",
      description: "A minmal CRUD API for users and blogs",
    },
    servers: [{ url: "http://localhost:3000" }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          schema: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsDoc(options);
export default swaggerSpec;
