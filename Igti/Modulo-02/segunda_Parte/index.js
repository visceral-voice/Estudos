import express from "express";

const app = express();

app.get("/", (req, res) =>{
  res.send("Hello World 2");
});

app.post("/", (req, res) =>{
  const a = 5;
  const b = 3;
  const resultado = soma(a,b);
  res.send("Resultado: " + resultado);
});

function soma (a, b){
  return a + b;
}

app.listen(3000, () =>{
  console.log("API Started");
});