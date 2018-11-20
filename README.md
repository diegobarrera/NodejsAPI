# Template for API
![Node Version][node-image]

//TODO: serializer RoR https://github.com/danivek/json-api-serializer
// TODO: npm install --save joi

## Getting started
### Environment
Execute in production mode with:
`npm start`

Execute in development mode with: 
`npm run dev`

Execute in tests with: 
`npm test` 
### Project Structure
The following is the ideal structure of the project
```

```

## Logging

There is a log folder with the logs for each environment, once there could be sent to Cloudwatch or something more elaborated like the E.L.K. stack, also take into consideration the implementation of a log-rotate to prevent write big files into a server.

# Documentation
Swagger Documentation is available in `/docs/index.html`


## Contributing
To contribute to the project, fork this repository, push feature branches to your fork and then submit PR to the dev branch of this repo.

[node-image]: https://img.shields.io/badge/node-8.12.0-brightgreen.svg
