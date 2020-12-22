import { O_RDONLY } from "constants";
import {promises as fs} from "fs";

const times = [];

async function init(){
  try {
    const data = JSON.parse(await fs.readFile("./Dados/2003/2003.json"));
    //Iniciando array de times
    data[0].partidas.forEach(partida => {
      times.push({time:partida.mandante, pontuacao:0});
      times.push({time:partida.visitante, pontuacao:0});
    });

    //preencher a pontuacao dos times
    data.forEach(rodada =>{
      rodada.partidas.forEach(partida =>{
        const timeMandante = times.find(item => item.time === partida.mandante);
        const timeVisitante = times.find(item => item.time === partida.visitante);

        if(partida.placar_mandante > partida.placar_visitante){
          timeMandante.pontuacao += 3;
        } else if (partida.placar_visitante > partida.placar_mandante){
                  timeVisitante.pontuacao += 3;
        } else {
                timeMandante.pontuacao += 1;
                timeVisitante.pontuacao += 1;
        }
      });
    });

    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    }
    );
    await salvaTimes();
    await salvaTimes4Primeiros();

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.forEach(async x => {
      console.log(await teste(x));
    });
    for(let i =0; i < array.length; i++){
      console.log(await teste(array[i]));
    }
    for(const x of array){
      console.log(await teste(x))
    }
  } catch (err) {
    console.log(err);
  }
}

init();

async function salvaTimes(){
  fs.writeFile("times.json", JSON.stringify(times, null, 2))
}
async function salvaTimes4Primeiros(){
  fs.writeFile("4primeiros.json", JSON.stringify(times.slice(0, 4), null, 2))
}

function teste(number){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(number);
    }, Math.random() * 1000);
  });
}