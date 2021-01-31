function start(){
  fetch("http://localhost:3001/countries").then(function(resource) {
    resource.json().then(function(json){
      console.log(json);
    });
  })
}

async function start2(){
  var resource = await fetch("http://localhost:3001/countries");
  var json = await resource.json();
  console.log(json);
}

//start();
start2();