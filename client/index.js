const socket = io();
socket.on("connect", (response) => {
  console.log("response");
});

socket.on("disconnect", (reason, details) => {
  // the reason of the disconnection, for example "transport error"
  console.log(reason);

  // the low-level reason of the disconnection, for example "xhr post error"
  console.log(details.message);

  // some additional description, for example the status code of the HTTP response
  console.log(details.description);

  // some additional context, for example the XMLHttpRequest object
  console.log(details.context);
});
