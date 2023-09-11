import sqlite3 from "sqlite3";
const sqlite = sqlite3.verbose();
export const db = new sqlite.Database(
  "C:\\Users\\FRANCISCO\\Desktop\\servidor-en-tiempo-real\\server\\database\\mensajes2.db",
  (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Conexión exitosa a la base de datos");
    }
  }
);