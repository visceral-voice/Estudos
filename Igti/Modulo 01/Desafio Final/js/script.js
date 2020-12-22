let tabUsers =  null;
let tabData = null;
let searchButton = null;
let searchName = null;

let allPerson = [];
let filterPerson = [];

let numberFormat = null;

window.addEventListener("load", () => {
  tabUsers = document.querySelector("#tabUsers");
  tabData = document.querySelector("#tabData");

  searchButton = document.querySelector("#searchButton");
  searchName = document.querySelector("#searchName");
  searchButton.addEventListener("click", renderSearch);

  numberFormat = Intl.NumberFormat("pt-BR");

   preventFormSubmit();
   initializeSearch();
   activateInput();
   fetchPerson();
});

function preventFormSubmit(){
  function handleFormSubnmit(event){
    event.preventDefault();
  }
  let form = document.querySelector("form");
  form.addEventListener("submit",handleFormSubnmit);
}

function activateInput(){
  function verifyButton(context){
    if (context.length > 0){
      searchButton.disabled = false;
    }else{
      searchButton.disabled = true;
    }
  }
  function handleTyping(event){
      let context = event.target.value;
      verifyButton(context);
      if (event.key === "Enter"){
        
      }
  }
  searchName.addEventListener("keyup", handleTyping);
}

function initializeSearch(){
  tabUsers.innerHTML = "<h5>Nenhum usuário filtrado</h5>";
  tabData.innerHTML = "<h5>Nada a ser exibido</h5>";
}

async function fetchPerson() {
  //const res = await fetch("https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo");
  const res = await fetch("./Backend/person.json");
  const json = await res.json().then(closedLoading());

  allPerson = json.results.map(person => {
    const {name, picture, gender, dob, years} = person;
    return {
      name: name.first + " " +  name.last,
      picture: picture.medium,
      gender,
      dob,
      years: dob.age
    };
  });
}

function renderSearch() {
  const stringSearch = new RegExp(searchName.value, "i");
  filterPerson = allPerson.filter(person => {
    return stringSearch.test(person.name);
  });
  showSearch();
}

function showSearch(){
  let filterPeopleHtml = "";
  let filterEstaticHtml = "";
  let countPerson = filterPerson.length;
  let countPersonMale = 0;
  let countPersonFemale = 0;
  let sumAges = 0;

  filterPeopleHtml = `<div><h5>${countPerson} usuario(s) encontrado(s)</h5></div>
                         `;
  filterPerson.forEach(person => {
    const {name, picture, gender, years} = person;

    const filterPersonHtml = `
      <div class="person">
        <div class="image">
          <img src="${picture}" alt="${name}" class="image">
        </div>
        <div class="person_information">
          ${name}, ${years} anos
        </div>
      </div>
    `;
    if (person.gender === "male") countPersonMale += 1;
    if (person.gender === "female") countPersonFemale += 1;
    sumAges += person.years;
    filterPeopleHtml += filterPersonHtml;
  });

  if (countPerson > 0){
    let average = formatNumber(sumAges / countPerson);
    filterEstaticHtml = `<div><h5>Estatítisticas</h5></div>
                         <div class="person_information">
                          <ul>
                            <li>Sexo masculino: ${countPersonMale}</li>
                            <li>Sexo feminino: ${countPersonFemale}</li>
                            <li>Soma das idades: ${sumAges}</li>
                            <li>Média das idades: ${average}</li>
                          </ul>  
                       </div>
                      `;
  }else{
    filterEstaticHtml = "<div><h5>Nada a ser exibido</h5></div>";
  }

  tabUsers.innerHTML = filterPeopleHtml;
  tabData.innerHTML = filterEstaticHtml;
}

function closedLoading(){
  const closedDiv = document.getElementsByClassName('preloader');
  closedDiv[0].style.visibility = "hidden";
}

function formatNumber(number){
  return numberFormat.format(number);
}
