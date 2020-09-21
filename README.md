# @llaine/server

## How to 

### Installation
```
$ yarn install 
```

### Running locally

```
$ yarn start:dev 
```

Browse to http://localhost:8080/faces to access the face resource.

### Running on server 

Visit [this url](https://shrouded-waters-26042.herokuapp.com/faces) to have access to the app. 

### Test

```
$ yarn test
--------------------|---------|----------|---------|---------|-------------------
File                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------|---------|----------|---------|---------|-------------------
All files           |     100 |       50 |     100 |     100 |
 src                |     100 |       50 |     100 |     100 |
  server.ts         |     100 |       50 |     100 |     100 | 12-21
 src/repositories   |     100 |      100 |     100 |     100 |
  faceRepository.ts |     100 |      100 |     100 |     100 |
 src/routes         |     100 |      100 |     100 |     100 |
  face.ts           |     100 |      100 |     100 |     100 |
--------------------|---------|----------|---------|---------|-------------------
``` 

### Build & Run for production 

You need to specify the `$PORT` variable otherwise it will fallback on the 8080. 
```
$ yarn build
$ PORT=6785 yarn start
``` 


## API Scheme

There's currently only one route in order to retrieve all the Faces. 

```
GET /faces
[
  {
    "id": number,
    "name": string,
    "avatar": string
  },
]
```

In order to play around locally and with the production env, use [postman](https://www.postman.com/) and import the environment files and the collection located in the `postman` folder
 
