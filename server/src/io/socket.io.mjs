import { db } from "../connectionDataBase/connection.mjs";
import { createIdUser } from "../createIdUser.mjs";

export const socket = (socket) => {
    socket.on("message",(data) => {
        console.log(data)
        socket.emit("mensaje",data)
    }) 
















    // const id = createIdUser()


    //  db.get("SELECT * FROM sesiones WHERE idUser = ?",[id],(err,row) => {
    //     if(err){
    //         console.log(err)
    //     }
    //     if(row){
    //         socket.emit("userConnect",)
    //     }
    //  })

    // socket.on("mandarMensaje", (mensaje) => {
    //   let agreagarIdUser = {
    //     mensaje: mensaje,
    //     id:id
    //   };  
      
    //   socket.broadcast.emit("mandarMensajeDelServer", agreagarIdUser);

    //   if(agreagarIdUser){
    //         db.run(
    //           "INSERT INTO mensajes(mensaje,idUser) VALUES (?,?)",
    //           [agreagarIdUser.mensaje,agreagarIdUser.id],(err) => {
    //             console.log("[+]"+ err)
    //           }
    //         );
    //   }
    // });
  
  }