import {db} from './database.js'

export const create = (obj) => {
    return new Promise((resolve, reject) => {
      console.log("estou aqui também")
      db.transaction((tx) => {
        //comando SQL modificável
        console.log("preste ao comando sql")
        tx.executeSql(
          "INSERT INTO clientes (nome , endereco, cpfcnpj , ie , cidade , estado , contato ) VALUES (?,?,?,?,?,?,?);",
          [obj.nome, obj.endereco, obj.cnpj, obj.ie, obj.cidade, obj.estado, obj.contato],
          //-----------------------
          (_, { rowsAffected, insertId }) => {
            console.log("estou funcionando")
            if (rowsAffected > 0) resolve(insertId);
            else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };