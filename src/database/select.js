import {db} from './database'
// criando vários hooks



export const selectName = (nome) => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          `SELECT * FROM clientes WHERE nome  LIKE '${nome}%';`,
          [],
          //-----------------------
          (_, { rows }) => {
            if (rows.length > 0){
                var results = []
                for(i=0; i < rows.length;i++){
                    let item = rows.item(i);
                    console.log(item)
                    results.push({id:item.id, nome: item.nome, endereco: item.endereco, cnpj: item.cpfcnpj, ie: item.ie, cidade: item.cidade, estado: item.estado, contato: item.contato})
                }
                resolve(results);
            } 
            else reject("Obj not found: nome=" + nome); // nenhum registro encontrado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    });
  };
  