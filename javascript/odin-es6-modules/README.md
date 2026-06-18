### Odin ES6 Modules

The suggested tutorial at
https://www.theodinproject.com/lessons/javascript-es6-modules

leads me onto this:
https://www.youtube.com/watch?v=BLak5aR4qXw
Importing and Export ES6 Modules in the Browser
Steve Griffith

server.js runs a node server to enable to run the program because
browsers enforce strict security (CORS) on ES6 modules to prevent
downloaded scripts from secretly stealing data

Opening the file directly from it's path lacks a valid network origin
This fails CORS checks so will not run in the browser

A local server created using built in node.js APIs creates a trusted
network address, localhost, which passes CORS checks so the program runs

To run the program:

```
node server.js
```
