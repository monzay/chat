import { db } from "../connectionDataBase/connection.mjs";
import { createIdUser } from "../createIdUser.mjs";



export const validarVerificacionLogin = (req, res) => {
  const { dataName, dataPassword } = req.body;

  db.get(
    "SELECT * FROM sesiones WHERE name = ? AND password = ?",
    [dataName, dataPassword],
    (err,row) => {
      if (err) {
        console.error(err);
      }
      if(row) {
        res.json({
          message:"esta cuenta ya existe",
          token:true,
          nombre:row.name 
        })
      } else { 
        const id = createIdUser()

        const sqlMandarLogin = "INSERT INTO sesiones(name, password,idUser) VALUES (?, ?)";
        db.run(sqlMandarLogin, [dataName, dataPassword,id], (err) => {

          if (err) {
            console.lo("[-]" + err);
            res.status(500).send("Error al crear la cuenta");
          }

        });
      }
    }
  );

  // db.close(err => {
  //   if(!err){
  //     console.log("se cerro la conexion a la base de datos")
  //   }
  // });
};