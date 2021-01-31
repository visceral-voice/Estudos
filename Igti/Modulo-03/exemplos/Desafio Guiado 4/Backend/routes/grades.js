import express, { response } from "express";
import { promises as fs } from "fs";

const router = express.Router();
const { readFile, writeFile } = fs;

async function postGrade(gradeToPost) {
  const data = JSON.parse(await readFile(global.fileName, 'utf8'));
  let grade = Object.assign({}, gradeToPost);
  grade = { id: data.nextId++, ...grade, timestamp: new Date() };
  data.grades.push(grade);
  await writeFile(global.fileName, JSON.stringify(data));

  return grade;
}

router.post("/", async (req, res, next) => {
  try {
    let grade = req.body;
    if (!grade.student || !grade.subject || !grade.type || grade.value == null) {
      throw new Error("Student, subject, type and value são obrigatórios!");
    }
    const data = JSON.parse(await readFile(fileName));

    grade = {
      id: data.nextId++,
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
      timestamp: new Date()
    };

    data.grades.push(grade);

    await writeFile(fileName, JSON.stringify(data));
    console.log(`${req.method} ${req.baseUrl} ${JSON.stringify(grade)}`);
    res.send(grade);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));
    if (data.grades.length < 1) {
      throw new Error("Nenhum registro encontrado");
    }
    delete data.nextId;
    console.log(`${req.method} ${req.baseUrl} com sucesso!`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));
    const grade = data.grades.find(grade => grade.id === parseInt(req.params.id));
    if (grade === undefined) {
      throw new Error("Nenhum registro encontrado");
    }
    console.log(`${req.method} ${req.baseUrl} ${JSON.stringify(grade)}`);
    res.send(grade);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));

    data.grades = data.grades.filter(grade => grade.id !== parseInt(req.params.id));
    await writeFile(fileName, JSON.stringify(data));
    console.log(`${req.method} ${req.baseUrl} ${req.params.id}`);
    res.end();
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let grade = req.body;
    const data = JSON.parse(await readFile(fileName));

    let index = data.grades.findIndex(a => a.id === parseInt(grade.id));

    if (index === -1) {
      throw new Error("Registro não encontrado!");
    }
    if (!grade.student || !grade.subject || !grade.type || grade.value == null) {
      throw new Error("Student, subject, type and value são obrigatórios!");
    }

    grade = {
      id: grade.id,
      student: grade.student,
      subject: grade.subject,
      type: grade.type,
      value: grade.value,
      timestamp: new Date()
    };
    data.grades[index] = grade;

    await writeFile(fileName, JSON.stringify(data));
    console.log(`${req.method} ${req.baseUrl} ${JSON.stringify(grade)}`);
    res.send(grade);
  } catch (err) {
    next(err);
  }
});

router.get("/:student/:subject", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));
    const grades = data.grades.filter(grade => {
      return (grade.student === req.params.student && grade.subject === req.params.subject)
    });
    if (grades.length === 0) {
      throw new Error("Nenhum registro encontrado");
    }
    const sumGrades = grades.reduce((acc, { value }) => acc + value, 0);
    console.log(`${req.method} ${req.baseUrl} ${req.params.student} ${req.params.subject}`);
    res.send(`A soma total das notas do estudante <b>${req.params.student}</b> <br />para a materia <b>${req.params.subject}</b> é igual a <b>${sumGrades}</b>`);
  } catch (err) {
    next(err);
  }
});

router.get("/media/:subject/:type", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));
    const grades = data.grades.filter(grade => {
      return (grade.subject === req.params.subject && grade.type === req.params.type)
    });
    if (grades.length === 0) {
      throw new Error("Nenhum registro encontrado");
    }
    const sumGrades = grades.reduce((acc, { value }) => acc + value, 0);
    let numberGrades = grades.length;
    let media = sumGrades / numberGrades;
    console.log(`${req.method} ${req.baseUrl} ${req.params.subject} ${req.params.type}`);
    res.send(`O total de notas da materia <b>${req.params.subject}</b> <br />
            do tipo <b>${req.params.type}</b> é igual a <b>${sumGrades}</b> <br />
            Foram apuradas <b>${numberGrades}</b> grades para a matéria e tipo especificados acima <br />
            O valor da média é igual <b>${media}</b>`);
  } catch (err) {
    next(err);
  }
});

router.get("/best/:subject/:type", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(fileName));
    const grades = data.grades.filter(grade => {
      return (grade.subject === req.params.subject && grade.type === req.params.type)
    });
    if (grades.length === 0) {
      throw new Error("Nenhum registro encontrado");
    }
    const retGrades = grades.sort((a, b) => {
      return b.value - a.value
    }).splice(0, 3);

    console.log(`${req.method} ${req.baseUrl} ${req.params.subject} ${req.params.type}`);
    res.send(JSON.stringify(retGrades));
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;
export { postGrade };