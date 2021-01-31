window.addEventListener("load", start);

const list = [];

function start(){
  const button = document.querySelector("#clickButton");
  button.addEventListener("click", handleButton);
}

function handleButton(){
    list.push(getTimeStamp());
    render();
}

function render(){
  let lis = "";
  list.map(item => {
    lis = lis + `<li>${item}</li>`
  });
  let ul = document.querySelector("#data");
  ul.innerHTML = lis;

  document.title = list.length;
}