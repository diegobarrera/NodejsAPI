![Node Version][node-image]
![Travis Status][travis-status]

# STRV Project - Address Book

## Getting started
The following is a Node.js API using Express.js that implements the address-book project.

### Environment
There are 3 different environments (**production**, **development**, and **test**). In order to execute the API in one of them, use the following commands:</br>

1. **Production** mode:</br>
`npm start`

1. **Development** mode: </br>
`npm run dev`

1. Run the **Test** suite: </br>
In order to run the test, use docker-compose to use a Postgres database with the command `npm run mount`<br /> 
then run `npm test` or `npm run test:coverage`. Finally run `npm run unmount` to stop docker-compose.

## Project Structure
The API manage the following structure:
```
TestProject
├── package.json
├── src
│   ├── app.js
│   ├── bin
│   ├── configuration
│   │   ├── env
│   │   ├── migrations
│   │   ├── seeders
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   └── utils
└── tests
    ├── integration
    ├── unit
    └── utils
```

## Documentation
API Swagger Documentation is available [here](https://app.swaggerhub.com/apis/diegobarrera/address-book/0.0.1)


## Contributing
All changes are welcome. If you run into any bugs, please file an issue and explain it.


[node-image]: https://img.shields.io/badge/node-10.13.0-brightgreen.svg
[travis-status]: https://travis-ci.com/diegobarrera/TestProject.svg?branch=master
