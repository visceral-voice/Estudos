window.addEventListener("load", () =>{
  doFetch();
  doFetchAsync();
  executeDivisionPromise();
  executeDivisionPromiseAsync();
});

function doFetch (){
  fetch("https://api.github.com/users/visceral-voice").then(res => {
    res.json().then(data => {
      showData(data);
    });
  }).catch(error => {
    console.log("Erro na requisição");
  });
}

async function doFetchAsync (){
  const res = await fetch("https://api.github.com/users/visceral-voice");
  const json = await res.json();
  console.log(json);
}

const showData = ((data) => {
  const user = document.querySelector("#user");
  user.textContent = data.login + " - " + data.name;
});

function divisionPromise(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0){
      reject("Não é possível dividir por zero.");
    }

    resolve(a / b);
  });
}

function executeDivisionPromise(){
  divisionPromise(12, 6).then(result =>{
    console.log(result);
  }).catch(errormessage => {
    console.log("Falha na divisão " + errormessage);
  });
  divisionPromise(12, 0).then(result =>{
    console.log(result);
  }).catch(errormessage => {
    console.log("Falha na divisão " + errormessage);
  });
}

async function executeDivisionPromiseAsync(){
  const division = await divisionPromise(12, 6);
  console.log(division);
}