const path = require('path')
const swaggerJSDoc = require('swagger-jsdoc')

const swaggerDefinition = {
    info: {
        title: 'TEMPLATE',
        description: 'Template API documentation.',
        license: {
            name: 'MIT'
        },
        version: '1.0.0'
    },
    produces: ['application/json'],
    consumes: ['application/json'],
    securityDefinitions: {
        jwt: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
        }
    },
    security: [{
        jwt: []
    }],
    basePath: '/'
}

const options = {
    swaggerDefinition,
    apis: [path.resolve(__dirname, '../src/controllers/*.js'), path.resolve(__dirname, '../src/routes/index.js')]
}

const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec
