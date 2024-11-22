// Name Surname u12345678
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const Poll = require("./poll");

const poll = new Poll({
  votes: [
    { option: "pebble", votes: 0 },
    { option: "sunshine", votes: 0 },
    { option: "miso", votes: 0 },
    { option: "panko", votes: 0 },
    { option: "snowball", votes: 0 },
  ],
  feed: [],
}); // feed is bonus

// routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/index.js", function (req, res) {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(__dirname + "/index.js");
});

// server sockets
io.on("connection", (socket) => {
  console.log("A user connected with ID:", socket.id);
  socket.emit("currentVotes", { votes: poll.getVotes(), feed: poll.getFeed() });

  socket.on("vote", (msg) => {
    console.log(`User ${socket.id.substr(0, 5)} voted`, msg);
    poll.vote(msg);
    poll.updateFeed(`User ${socket.id.substr(0, 5)} voted for ${msg}`); // bonus
    io.emit("someoneVoted", { votes: poll.getVotes(), feed: poll.getFeed() });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

http.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
