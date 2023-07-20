"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerOptions = void 0;
exports.swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sismadeq - Api Rest Full Dynamic.',
            description: 'Sistema De Manejo de Equipos - Sismadeq - Api Rest Full Dynamic.',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:8000/api',
                description: 'The server api environment development',
            },
            {
                url: 'https://api-basic.vercel.app/api',
                description: 'The server api environment production',
            }
        ],
    },
    apis: ["./dist/**/doc/*.doc.js"],
};
