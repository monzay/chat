import React, { useState, useEffect } from "react";
import io from "socket.io-client";

export const App = () => {

  //conexion con servidor
  const socket = io("http://localhost:3000");
  const [mensaje,setMensaje] = useState("")
  const [mensajes,setMensajes] = useState([])
  
//   const [mensaje, setMensaje] = useState("");
//   const [mensajes, setMensajes] = useState([]);
//   const [userConnect, setUserConnect] = useState([]);

//   const submit = (e) => {
//     e.preventDefault(); 
//       socket.emit("mandarMensaje", mensaje)
//   };
 
// useEffect(() => {
//   const getMessages = (message) => {
//      setMensajes( prevMensajes => [...prevMensajes,message]) 
//   }
  
//   socket.on("mandarMensajeDelServer",getMessages)
//   socket.on("userConnect",data => console.log(data)) 
//   return () =>  socket.off("mandarMensajeDelServer",getMessages)
// },[])

const submit =(e)=>{
  e.preventDefault()
  
  socket.emit("messega",mensaje)

}
useEffect(() => {
    socket.on("mensaje", message => console.log(message) )
}, [])

  return (

    <form onSubmit={submit}>
      <input type="text"  onChange={(e)=>setMensaje(e.target.value)}/>
      <input type="submit" />
    </form>
    // <div>
    //   <form onSubmit={submit}>
    //     <input
    //       type="text"
    //       placeholder="escribrir..."
    //       onChange={(e) => setMensaje(e.target.value)}
    //     />
    //     <input type="submit" />
    //   </form>
    //  <ul>
    //   {
    //     mensajes.map((m,i)=>
    //       (<li key={i}>de {m.id}: {m.mensaje}</li>)
    //     )
    //   }
    //  </ul>
    //  <ul>
 
    //  </ul>
    // </div>
    
  );
};
