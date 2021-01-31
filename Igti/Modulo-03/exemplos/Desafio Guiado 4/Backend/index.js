import express from "express";
import gradesRouter from "./routes/grades.js";
import { postGrade } from './routes/grades.js';
import { promises as fs } from "fs";
global.fileName = "grades.json";

const { readFile, writeFile, deleteFile } = fs;
const app = express();
app.use(express.json());

app.use("/grades", gradesRouter);

function simulateGrades(){
  const students = ["John Petrucci", "Mike Portnoy", "Neal Morse"];
  const subjects = ["01 - JavaScript", "02 - Node", "03 - React"];
  const types = ["Exercícios", "Trabalho Prático", "Desafio"];
  const maxGrades = [10, 40, 50];

  const grades = [];

  students.forEach((student) => {
    subjects.forEach((subject) => {
      types.forEach((type, index) => {
        const value = Math.ceil(Math.random() * maxGrades[index]);

        const grade = {
          student,
          subject,
          type,
          value
        }

        grades.push(grade);
      });
    });
  });

  const postAllGrades = async () => {
    for( let i = 0; i < grades.length; i++ ) {
      await postGrade(grades[i]);
    }
  };

  postAllGrades();
};


app.listen(3001, async () => {
  await deleteFile(global.fileName);

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
  simulateGrades();
});