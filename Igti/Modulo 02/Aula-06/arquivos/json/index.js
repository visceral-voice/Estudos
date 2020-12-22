import {promises as fs} from "fs";

readWriteJson();

async function readWriteJson(){
  try{
       //escrito com valores iniciais
       const arrayCarros = ["Gol", "Palio", "Uno"];
       const obj = {
          carros: arrayCarros
       };
       await fs.writeFile("teste.json", JSON.stringify(obj));

       //fez a leitura do conteudo atual
       const data = JSON.parse(await fs.readFile("teste.json"));

       //modificando o conteudo
       data.carros.push("Sandero");

       //sobrescrevendo o arquivo com  conteudo modificado
       await fs.writeFile("teste.json", JSON.stringify(data));
  } catch (err){
    console.log(err);
  }
}
