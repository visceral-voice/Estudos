import express, { response } from "express";
import gradesRouter from "./routes/grades.js";
import { promises as fs } from "fs";
global.fileName = "grades.json";

const { readFile, writeFile } = fs;
const app = express();
app.use(express.json());

app.use("/grades", gradesRouter);

app.listen(3000, async () => {
  try {
    await readFile(fileName);
    console.log("Api Started!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      grades: []
    }
    writeFile(fileName, JSON.stringify(initialJson)).then(() => {
      console.log("Api Started and file created!");
    }).catch(err => {
      console.log(err);
    });
  }
});