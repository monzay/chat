import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { tokenUser } from "./datosGlobales/token";

export const VerificarSesion = () => {

  const [verificar, setVerificar] = useState(true);
  // const {conObtenerToken} = useContext(tokenUser)
  // setVerificar(conObtenerToken.token)

  if (!verificar) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};