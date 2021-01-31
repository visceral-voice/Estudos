import express from "express"

const app = express();
app.use(express.json());

app.listen(3000,() =>{
  console.log("API Started");
});

app.all("/testeall",(req, res) =>{
  res.send(req.method);
});

//Caracteres especiais
app.get("/teste?",(_req, res) =>{
  res.send("Teste?");
});

app.get("/buzz+",(_, res) =>{
  res.send("buzz+");
});

app.get("/one*blue", (req, res) =>{
  res.send(req.path);
});

app.post("/test(ing)?", (req, res) =>{
  console.log(req.body);
  res.send("/test(ing)?");
});

app.get(/.*Red$/, (req, res) =>{
  res.send("/.*Red$/");
});

//Parametros na rota
app.get("/testeParam/:id/:a?", (req, res) =>{
  res.send(req.params.id + " " + req.params.a);
});

//Parametros via query
app.get("/testeQuery", (req, res) =>{
  res.send(req.query);
});

//Next
app.get("/testeMultipleHandlers",(req, res, next) =>{
  console.log("Callback1");
  next();
}, (req, res) =>{
  console.log("Callback2");
  res.end("Teste");
});

//Next com array
const callback1 = (req, res, next) =>{
  console.log("Callback 1");
  next();
};

function callback2 (req, res, next){
  console.log("Callback 2");
  //next();
  res.end("Finalizando aqui");
};

const callback3 = (req, res, next) =>{
  console.log("Callback 3");
  res.end();
};

app.get("/testeMultipleHandlersArray",[callback1, callback2, callback3]);

//route
app.route("/TestRoute")
  .get((req, res) => {
    res.send("Route GET");
  })
  .post((req, res) =>{
    res.send("Route POST");
  })
  .delete((req, res) => {
    res.send("Route DELETE");
  });
