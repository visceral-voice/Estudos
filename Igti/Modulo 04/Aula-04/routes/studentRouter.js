import express from "express";
import { studentModel } from "../models/studentModel.js";

const app = express();

app.post("/students", async (req, res) => {
  try {
      const student = new studentModel(req.body);
      await student.save();
      res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/students", async (req, res) => {
  try {
      const student = await studentModel.find({});
      res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/students/:id", async (req, res) => {
  try {
      const student = await studentModel.findByIdAndUpdate({_id: req.params.id},req.body, {new: true});
      res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/students/:id", async (req, res) => {
  try {
      const student = await studentModel.findByIdAndDelete({_id: req.params.id});
      if (!student){
        res.status(400).send("Documento não encontrado");
      } else {
        res.status(200).send("Documento excluido");
      }
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as studentRouter };