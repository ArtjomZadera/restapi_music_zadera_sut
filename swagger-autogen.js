const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/*.js'];

const config = {
    info: {
        title: 'Zadera & Sut music',
        description: '',
    },
    tags: [ ],
    host: 'localhost:5000/api',
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);
