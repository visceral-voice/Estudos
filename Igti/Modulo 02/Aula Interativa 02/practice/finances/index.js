import express from "express";

const app = express();
app.use(express.json());

app.get("/teste", (req, res) => {
  res.send("ok");
});

app.listen(3000, () => {
  const initialJson = {
    nextId: 1,
    lancamentos: []
  };
  console.log("API Started");
});