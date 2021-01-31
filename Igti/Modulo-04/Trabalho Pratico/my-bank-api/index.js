import express from "express";
import mongoose from "mongoose";
import { accountRouter } from "./routes/accountRouter.js";

const app = express();

// const LOCAL = "mongodb://localhost/my-bank-api";
// //const ATLAS = "mongodb+srv://srpp-user-igti:01201073@grades.vi901.mongodb.net/grades?retryWrites=true&w=majority";

// try {
//       await mongoose.connect(LOCAL, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useFindAndModify: false,
//           useCreateIndex: true
//       })
//       console.log("MongoDB conectado");
//    } catch (err) {
//     console.log("Erro ao conectar no Mongo " + err);
//    }

app.use(express.json());
app.use(accountRouter);

app.listen(3000, () => {
  console.log("Api iniciada");
});