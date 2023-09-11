import { useContext, useState } from "react";
import { tokenUser } from "../datosGlobales/token";


export const Login = () => {
  const [registroNombre, setRegistroNombre] = useState("");
  const [registroPassword, setRegistroPassword] = useState("");
  // const {setObtenerToken} = useContext(tokenUser)

  const x = async (dataForm) => {
    try {
     const  response = await fetch("http://localhost:3000/", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", // Tipo de contenido que estás enviando (en este caso, JSON)
        },
        body: JSON.stringify(dataForm),
      });
      const info = await response.json()
      // setObtenerToken(info)
          
    } catch (error) {
        console.log(error)
    }
  };

  const Registro = (e) => {
    e.preventDefault();

    const dataForm = {
      dataName: registroNombre,
      dataPassword: registroPassword,
    };
    x(dataForm);
  };

  
  return (
    <div>
      <h1>Registro</h1>
          <form onSubmit={Registro}>
      <input
        type="nombre"
        onChange={(e) => setRegistroNombre(e.target.value)}
      />
      <input
        type="password"
        onChange={(e) => setRegistroPassword(e.target.value)}
      />
      <input type="submit" />
    </form>
    </div>
  );
};
