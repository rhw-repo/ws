# The Odin Project Library Project

## Run this project using Docker

A simple static web app with DOMPurify via a pre-built minified script.

- Run this project with docker-compose from the project root directory:

docker compose build --no-cache

Next run:

docker compose up -d

Open a browser and visit:

<http://localhost>

To stop the container, run:

docker compose down

- Run this project as a single container from the project's root directory:

Create the Docker image by running:

docker build -t top-library-project .

Run the container on port 80:

docker run -d -p 80:80 top-library-project

Open a browser and visit:

<http://localhost>

To stop the running container run:
docker ps

Then pass the container id to the command:

docker stop

## This project uses

- JavaScript, HTML, CSS
- woff & woff2 self-hosted fonts
- DOMPurify via npm to sanitize input
- CSS BEM naming conventions
- JavaScript JSDoc comments
- Formatting with Prettier, linting with ESLint & markdownlint

## Project Instructions

All of your book objects are going to be stored in an array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array.  

For more information [click here to visit the project instructions webpage](https://www.theodinproject.com/lessons/node-path-javascript-library)
