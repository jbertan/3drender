import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());
const server = createServer(app);
//Both of them can not start at 3000 permission granted to 3000;
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//Server io started  connection
io.on("connection", (socket) => {
  console.log("New User Connected");

  const intervalSize = setInterval(() => {
    const value = Math.random() + 1;
    socket.emit("newSize", value);
  }, 100);

  //When disconnect we need to clear interval
  socket.on("disconnect", () => {
    console.log("User disconnected");
    clearInterval(intervalSize);
  });
});

server.listen(3001, () => {
  console.log("Welcome to port 3001");
});
