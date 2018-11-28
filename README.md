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
`npm test` or `npm run test:coverage`

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
```

## Documentation
API Swagger Documentation is available in `/docs/index.html`


## Contributing
All changes are welcome. If you run into any bugs, please file an issue and explain it.


[node-image]: https://img.shields.io/badge/node-10.13.0-brightgreen.svg
[travis-status]: https://travis-ci.com/diegobarrera/TestProject.svg?branch=master
