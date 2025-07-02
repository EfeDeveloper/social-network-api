import swaggerJSDoc, { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Social Network API',
      version: '1.0.0',
      description: 'Documentation of the Social Network API with Express and TypeScript',
      contact: {
        name: 'Edwin Villa',
        email: 'edwinvilla_adsi@outlook.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3005/api',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT authentication (add your token with "Bearer <Token>")',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: ['./src/routes/*.ts', './src/controllers/*.ts', './src/models/*.ts'],
};

export default swaggerJSDoc(swaggerOptions);
