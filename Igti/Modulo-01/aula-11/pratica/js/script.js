window.addEventListener("load", () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

//Cria novo array espelhado da origem com os campos determinados
function doMap(){
  const nameEmailArray = people.results.map(person => {
    return{
      name: person.name,
      email: person.email
    };
  }); 
  //console.log(nameEmailArray);
  return nameEmailArray;
}
//retorna todos os objetos que satisfaçam a condição
function doFilter(){
  const olderThan50 = people.results.filter(person => {
    return person.dob.age > 50;
  }); 
  console.log(olderThan50);
}
//percorre todos os objetos do array
function doForEach(){
  const mappedPeople = doMap();
  mappedPeople.forEach(person => {
    person.nameSize = person.name.title.length +
                      person.name.first.length +
                      person.name.last.length;
  });

  console.log(mappedPeople);
}
//retorna a soma de todos os objetos de um determinado atributo
function doReduce(){
  const totalAges = people.results.reduce((acumulator, current) => {
    return acumulator + current.dob.age;
  },0);

  console.log(totalAges);
  // let sumAges = 0

  // for(let count = 0; count < people.results.length; count++){
  //   var current = people.results[count];
  //   sumAges += current.dob.age;
  // }
  // console.log(sumAges);
}
//Retorna o primeiro objetoq ue satisfaça a condição
function doFind(){
  const found = people.results.find(person => {
    return person.location.state === "Minas Gerais";
  });

  console.log(found);
}

//Retorna verdadeiro caso a condição seja atendida por um objeto
function doSome(){
  const found = people.results.some(person => {
    return person.location.state === "Amazonas";
  });
  console.log(found);
}

//Retorna verdadeiro caso a condição seja atendida por todos os objetos do array
function doEvery(){
  const all = people.results.some(person => {
    return person.nat === "BR";
  });
  console.log(all);
}

//Retorna array com os objetos ordenados de acordo com os parametros
function doSort(){
  const mappedPeople = people.results.map(person => { //Cria novo array apenas com o primeiro nome
    return {name: person.name.first};
  }).filter(person => person.name.startsWith("A") //Filtra o array verificando o filtro passado
  ).sort((a, b) => {
    //return a.name.length - b.name.length; //ordenação do menor nome para o maior
    //return b.name.length - a.name.length; //ordenação do maior nome para o menor
    //return a.name.localeCompare(b.name); //Em ordem alfabetica crescente
    return b.name.localeCompare(a.name); //Em ordem alfabetica decrescente
  });
  console.log(mappedPeople);
}