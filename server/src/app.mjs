import express from "express";
import { createServer } from "http"; // Cambiado "http" por "createServer"
import { Server as WebSocketServer } from "socket.io";
import cors from "cors"

import { validarVerificacionLogin } from "./routers/login.mjs";
import { socket } from "./io/socket.io.mjs";
import { loadingMensajes } from "./routers/loadingMensajes.mjs";


const app = express();
const server = createServer(app);
const io = new WebSocketServer(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

app.use(express.json());
app.use(cors());

app.post("/",validarVerificacionLogin);
app.get("/app/:id",loadingMensajes)

io.on("connection",socket);


server.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Servidor en funcionamiento en el puerto 3000");
});
