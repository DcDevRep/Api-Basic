import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
const env = process.env.NODE_ENV;

const serverUrl = env?.trim() === "production" ? 'https://api-basic.vercel.app/{basePath}' : 'http://localhost:8000/{basePath}';

const swaggerConfig = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sismadeq - Api Rest Full Dynamic.',
      summary: "Un Sistema De Manejo de Equipos.",
      description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic based on the OpenAPI 3.0 Specification (OAS3). <br /><br />By',
      termsOfService: 'http://swagger.io/terms/',
      contact: {
        name: 'Dc Dev -> David Coach Dev',
        url: 'https://www.linkedin.com/in/dcdevtk/',
        email: 'dcdevtk@gmail.com'
      },
      license: {
        name:'MIT',
        url: 'https://opensource.org/license/mit/'
      },
      version: '1.0.0',
    },
    servers: [
      {
        url: serverUrl,
        description: 'The server api environment ' + (env?.trim()==="production" ? 'production' : 'development'),
        variables: {
          basePath: {
            enum: ['api'],
            default: 'api',
            description: 'this value is assigned by the service provider'
          },
        }
      }
    ],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  apis: [
    "dist/**/doc/*.doc.js",
  ],
}

const swaggerOptions = {
  explorer: true,
  swaggerUi: true,
  docExpansion: 'list',
  validatorUrl: null,
  filter: true,
  deepLinking: true,
  customSiteTitle: 'Api Rest Full Dynamic',
  customFavIcon: 'dist/asset/ico/favicon.ico',
  customCss: '.swagger-ui .topbar {display: none;}',
  customCssUrl: 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'
};

const config = swaggerJsDoc(swaggerConfig);
export const middleware = swaggerUI.serve;
export const controller = swaggerUI.setup(config, swaggerOptions);
