import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";

const ATLAS = "mongodb+srv://srpp-user-igti:01201073@grades.vi901.mongodb.net/grades?retryWrites=true&w=majority";

try {
      await mongoose.connect(ATLAS, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true
      })
      console.log("MongoDB conectado");
   } catch (err) {
    console.log("Erro ao conectar no Mongo " + err);
   }

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000, () => {
  console.log("Api iniciada");
});