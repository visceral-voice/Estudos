window.addEventListener("load", start);

const list = [];

function start(){
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButton);
}

function handleButton(){
    let item = getTimeStamp();
    list.push(item);
    render(item);
}

function render(item){
  let li = document.createElement("li");
  li.textContent = item;

  let ul = document.querySelector("#data");
  ul.appendChild(li);

  document.title = list.length;
}