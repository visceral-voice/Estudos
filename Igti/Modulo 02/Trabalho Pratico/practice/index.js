import { promises as fs } from "fs";

let states = [];
let cities = [];
let lowEst = 0;
let bigEst = 0;

async function readFiles() {
  states = JSON.parse(await fs.readFile("Estados.json"));
  cities = JSON.parse(await fs.readFile("Cidades.json"));

  createFiles();
  await topFive();
  await lastFive();
  await bigestNameEachState();
  await lowestNameEachState();
  await bigestName();
  await lowestName();
}

async function createFile(fileName, citiesOfState) {
  try {
    await fs.writeFile(fileName, JSON.stringify(citiesOfState));
  } catch (err) {
    console.log(err);
  }
}

function createFiles() {
  let fileName = "";
  states.forEach(state => {
    const { ID, Sigla } = state;
    const citiesOfState = cities.filter(citie => {
      return citie.Estado === ID;
    });
    fileName = Sigla + ".json";
    createFile(fileName, citiesOfState);
  });
}

async function countCities(sigla) {
  try {
    let fileName = sigla + ".json";
    return await JSON.parse(await fs.readFile(fileName)).length;
  } catch (err) {
    console.log(err);
  }
}

async function createArrayCount() {
  let countCitiesOfStates = [];
  states.forEach(state => {
    const { Sigla } = state;
    const obj = {
      state: Sigla,
      count: 0
    };
    countCitiesOfStates.push(obj);
  });
  for (let i = 0; i < countCitiesOfStates.length; i++) {
    countCitiesOfStates[i].count = await countCities(countCitiesOfStates[i].state);
  }
  return countCitiesOfStates;
}

async function topFive() {
  let countCitiesOfStates = await createArrayCount();
  console.log(countCitiesOfStates.sort((a, b) => {
    return b.count - a.count;
  }).splice(0, 5).map(obj => {
    const { state, count } = obj;
    return state + " - " + count;
  }));
}

async function lastFive() {
  let countCitiesOfStates = await createArrayCount();
  console.log(countCitiesOfStates.sort((a, b) => {
    return b.count - a.count;
  }).splice(22, 27).map(obj => {
    const { state, count } = obj;
    return state + " - " + count;
  }));
}

async function SearchBigestNames() {
  try {
    let bigEstNames = [];
    for (let c = 0; c < states.length; c++) {
      let sigla = states[c].Sigla;
      let fileName = sigla + ".json";
      let tempArray = JSON.parse(await fs.readFile(fileName));
      let countTamanhoNome = [];
      for (let i = 0; i < tempArray.length; i++) {
        const obj = {
          state: sigla,
          nome: tempArray[i].Nome,
          tamNome: tempArray[i].Nome.length
        };
        countTamanhoNome.push(obj);
      }
      bigEst = 0;
      for (let i = 0; i < countTamanhoNome.length; i++) {
        let obj = countTamanhoNome[i];
        if (obj.tamNome > bigEst) {
          bigEst = obj.tamNome;
        }
      }
      let arrayTemp = countTamanhoNome.filter(city => {
        return city.tamNome === bigEst;
      }).sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      }).splice(0, 1);
      //console.log(arrayTemp);
      for (let i = 0; i < arrayTemp.length; i++) {
        const obj = {
          state: arrayTemp[i].state,
          nome: arrayTemp[i].nome,
          tamNome: arrayTemp[i].tamNome
        };
        bigEstNames.push(obj);
      }
    }
    return bigEstNames;
  } catch (err) {
    console.log(err);
  }
}

async function SearchLowestNames() {
  try {
    let lowEstNames = [];
    for (let c = 0; c < states.length; c++) {
      let sigla = states[c].Sigla;
      let fileName = sigla + ".json";
      let tempArray = JSON.parse(await fs.readFile(fileName));
      let countTamanhoNome = [];
      for (let i = 0; i < tempArray.length; i++) {
        const obj = {
          state: sigla,
          nome: tempArray[i].Nome,
          tamNome: tempArray[i].Nome.length
        };
        countTamanhoNome.push(obj);
      }
      lowEst = 1000;
      for (let i = 0; i < countTamanhoNome.length; i++) {
        let obj = countTamanhoNome[i];
        if (obj.tamNome < lowEst) {
          lowEst = obj.tamNome;
        }
      }
      let arrayTemp = countTamanhoNome.filter(city => {
        return city.tamNome === lowEst;
      }).sort((a, b) => {
        return a.nome.localeCompare(b.nome);
      }).splice(0, 1);
      //console.log(arrayTemp);
      for (let i = 0; i < arrayTemp.length; i++) {
        const obj = {
          state: arrayTemp[i].state,
          nome: arrayTemp[i].nome,
          tamNome: arrayTemp[i].tamNome
        };
        lowEstNames.push(obj);
      }
    }
    return lowEstNames;
  } catch (err) {
    console.log(err);
  }
}

async function bigestNameEachState() {
  let MaiorNome = await SearchBigestNames();
  console.log(MaiorNome.map(obj => {
    const { nome, state } = obj;
    return `${nome} - ${state}`;
  }));
}

async function lowestNameEachState() {
  let MenorNome = await SearchLowestNames();
  console.log(MenorNome.map(obj => {
    const { nome, state } = obj;
    return `${nome} - ${state}`;
  }));
}

async function bigestName() {
  let MaiorNome = await SearchBigestNames();
  let bigEst = 0
  for (let i = 0; i < MaiorNome.length; i++) {
    if (bigEst < MaiorNome[i].tamNome) bigEst = MaiorNome[i].tamNome;
  }
  console.log(MaiorNome.filter(city => {
    return city.tamNome === bigEst;
  }).map(obj => {
    const { nome, state } = obj;
    return `${nome} - ${state}`
  }));
}

async function lowestName() {
  let MenorNome = await SearchLowestNames();
  let lowEst = 1000
  for (let i = 0; i < MenorNome.length; i++) {
    if (lowEst > MenorNome[i].tamNome) lowEst = MenorNome[i].tamNome;
  }
  console.log(MenorNome.filter(city => {
    return city.tamNome === lowEst;
  }).sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  }).splice(0, 1).map(obj => {
    const { nome, state } = obj;
    return `${nome} - ${state}`
  }));
}

readFiles();
//  let Qtde = await countCities("BA");
//  console.log(Qtde);
