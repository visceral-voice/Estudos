window.addEventListener("load", () => {
  doSpread();
  doRest();
 doDestructuring();
});

//Agrupa dois ou mais arrays e outros objetos (Spread = ...)
function doSpread(){
  const marriedMen = people.results.filter(person => {
    return person.name.title === "Mr";
  }); 
  
  const marriedWomen = people.results.filter(person => {
    return person.name.title === "Ms";
  });   

  const marriedPeople = [...marriedMen, ...marriedWomen, {msg: "Oi"}];
  console.log(marriedPeople);
}

//Permite receber n objetos (Rest = ...)
function doRest(){
  console.log(infiniteSum(1, 2));
  console.log(infiniteSum(1, 2, 1000));
  console.log(infiniteSum(1, 2, 10, 12, 54, 87, 54, 55, 11, 1, 65, 150, 544, 66, 88));
}

function infiniteSum(...numbers){
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestructuring(){
  const first = people.results[0];

  //Modo tradicional repetitivo
  const usuario = first.login.username;
  const senha = first.login.password;
  console.log(usuario);
  console.log(senha);

  //Utilizando destructuring
  const{username, password} = first.login;
  console.log(username);
  console.log(password);
}