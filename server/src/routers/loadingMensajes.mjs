import { db } from "../connectionDataBase/connection.mjs";


export const loadingMensajes = (req, res) => {
    const {id} = req.params.id
  db.all("SELECT * FROM  mensajes WHERE id = ? ", [id], (err, rows) => {
    if (err) {
      console.error(err);
    }
    if(rows){
        req.json(rows)
    }
  });
};
