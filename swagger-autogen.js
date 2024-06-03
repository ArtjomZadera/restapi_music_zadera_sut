const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/*.js'];

const config = {
    info: {
        title: 'Zadera & Sut music',
        description: '',
    },
    tags: [
        {
            name: 'User',
            description: 'Users api'
        },
        {
            name: 'Author',
            description: 'Authors api'
        },
        {
            name: 'Music',
            description: 'Musics api'
        },
        {
            name: 'PlayList',
            description: 'PlayLists api'
        },  
        {
            name: 'Music2PlayList',
            description: 'Musics2PlayLists api'
        }  
    ],
    host: 'localhost:5000/api',
    schemes: ['http', 'https'],
    securityDefinitions:{
        AuthToken:{
          type: "apiKey",
          name: "x-access-token",
          in: "header"
        }
       }
};

swaggerAutogen(outputFile, endpointsFiles, config);
