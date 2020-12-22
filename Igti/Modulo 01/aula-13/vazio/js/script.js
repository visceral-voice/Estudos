let globalNames = ["Um", "Dois", "Três", "Quatro", "Cinco"];
let globalInputName =  null;
let globalIsEditing = false;
let globalCurrentIndex;

window.addEventListener("load", () => {
  globalInputName = document.querySelector("#inputName");
  preventFormSubmit();
  activateInput();
  render();
});

function preventFormSubmit(){
  function handleFormSubnmit(event){
    event.preventDefault();
  }
  var form = document.querySelector("form");
  form.addEventListener("submit",handleFormSubnmit);
}

function activateInput(){
  function insertName(newName){
    //globalNames.push(newName);
    globalNames = [...globalNames, newName];
  }
  function updateName(newName){
    globalNames[globalCurrentIndex] = newName;
  }
  function handleTyping(event){
      if (event.key === "Enter"){
        var conteudo = event.target.value;
        if (conteudo.length > 0){
          if(globalIsEditing === true){
            updateName(conteudo);
          }else{
            insertName(conteudo);
          }
        }
        globalIsEditing = false;
        render();
      }
  }
  globalInputName.addEventListener("keyup", handleTyping);
  globalInputName.focus();
}

function render(){
  function createDeleteButton(index){
    function deleteName(){
      //globalNames.splice(index,1); 
      // // globalNames = globalNames.filter((name, i) => {
      // //   if (i === index){
      // //     return false;
      // //   }
      // //   return true;
      // // });
      globalNames = globalNames.filter((name, i) => i !== index);
      render();
    }
    var button = document.createElement("button");
    button.classList.add("deleteButton")
    button.addEventListener("click", deleteName);
    button.textContent = "X";
    return button;
  }

  function createSpan(name, index){
    function editItem(){
      globalInputName.value = name;
      globalCurrentIndex = index;
      globalIsEditing = true;
      globalInputName.focus();
    }
    var span = document.createElement("span");
    span.classList.add("clickable");
    span.textContent = name;
    span.addEventListener("click",editItem);
    return span;
  }
  var divNames = document.querySelector("#names");
  divNames.innerHTML = "";
  var ul = document.createElement("ul");

  for(var i = 0; i < globalNames.length; i++){
    var currentName = globalNames[i];
    var li = document.createElement("li");
    li.appendChild(createDeleteButton(i));
    li.append(createSpan(currentName, i));
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}

// function clearInput(){
//   globalInputName.value = "";
//   globalInputName.focus();
// }
const clearInput = (() => {
  globalInputName.value = "";
  globalInputName.focus();
});