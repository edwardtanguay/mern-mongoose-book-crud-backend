# mern-mongoose-book-crud-backend

This is the backend to a two-repository project that allows a user to view books, then log in to delete and edit them. You have to install the backend and frontend. 

- [backend repository](https://github.com/edwardtanguay/mern-mongoose-book-crud-backend)
- [frontend repository](https://github.com/edwardtanguay/mern-mongoose-book-crud-frontend)

## clone this repository

- clone this repository into project directory, e.g. `mern-crud-backend`
- delete the repository: `rm -rf .git`
- create a new repository: `git init -b main`
- install node modules: `npm i`
- open project in editor e.g. `code .` (Visual Studio Code)

## create database

- create MongoDB database at your MongoDB Atlas called `bookapi`
- create a collection in it called `books`
- import the file `dev/books.json` into the collection `books`

## create .env file

- create an `.env` file in the root directory of your project
- copy in the following content
- replace all capiatlized variables with appropriate data 
  - USERNAME
  - PASSWORD
  - RANDOMSTRING
  - ADMINPASSWORD
- you can also change the backend/frontend ports if you need to

``` text
APP_NAME = Book Site API
SECONDS_TILL_SESSION_TIMEOUT = 3600 
PORT = 5001
MONGODB_CONNECTION = mongodb+srv://USERNAME:PASSWORD@cluster0.ogshn.mongodb.net/bookapi?retryWrites=true&w=majority
SESSION_SECRET = RANDOMSTRING
ADMIN_PASSWORD = ADMINPASSWORD
FRONTEND_URL = http://localhost:5002
```

## start the project

- `npm run dev`
