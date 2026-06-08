/* Node.js has built in identifiers 
console - use to log to console 
global - namespace available to the entire Node process
process - give you access to the currently running process
*/
// global acts like window object in the browser
//
global.luckyNum = "23";
console.log(global.luckyNum);

// process to check the currently running platform (MAc OS = darwin)
console.log(process.platform);
console.log(process.env.USER);

/*
Node.js implements an event loop 
Pushes intensive operations off to a separate thread 
Therefore only very fast non blocking operations happen on the main thread
Therefore Node is often described as non blocking async event-driven runtime 
*/

/* In most cases you will listen to events you need to know
events and callbacks
example on the process global 
before a process finishes it emits an event named exit
we can listen to this event using on and then register a callback function 
as the second argument
callback functions get their name from this process - they are not called 
until the exit event occurs, therefore at some time in the future
*/

//when exit event occurs the callback function will be called
process.on("exit", function () {
  // do something!
});

const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("lunch", () => {
  console.log("yum");
});

eventEmitter.emit("lunch");
