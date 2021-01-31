import mongoose from 'mongoose';

const LOCAL = "mongodb://localhost/grades";
const ATLAS = "mongodb+srv://srpp-user-igti:01201073@grades.vi901.mongodb.net/grades?retryWrites=true&w=majority";

await mongoose.connect(LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true
  },
  lastModifided: {
    type: Date,
    default: Date.now
  }
});

//const student = mongoose.model("student", studentSchema) //Definindo esquema vai para o plural
const student = mongoose.model("student", studentSchema, "student") //Definindo esquema com nome 

const iStudent = new student();
iStudent.name = "Paulo Assis";
iStudent.subject = "Português";
iStudent.type = "Prova Final";
iStudent.value = 29.65;
iStudent.save().then(() => {
  console.log("Documento inserido");
  mongoose.disconnect();
}).catch((err) => {
  console.log("Erro ao inserir documento " + err);
});
