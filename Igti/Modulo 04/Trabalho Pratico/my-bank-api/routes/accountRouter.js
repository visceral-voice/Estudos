import express from "express";
import mongoose from "mongoose";
import { accountModel } from "../models/accountModel.js";

const app = express();

const LOCAL = "mongodb://localhost/my-bank-api";
//const ATLAS = "mongodb+srv://srpp-user-igti:01201073@grades.vi901.mongodb.net/grades?retryWrites=true&w=majority";

async function conectBank(){
  try {
    await mongoose.connect(LOCAL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    console.log("MongoDB conectado");
  } catch (err) {
    console.log("Erro ao conectar no Mongo " + err);
  }
}

async function desConectBank(){
  try {
    mongoose.disconnect();
    console.log("MongoDB desconectado");
  } catch (err) {
    console.log("Erro ao desconectar no Mongo " + err);
  }
}

app.post("/accounts", async (req, res) => {
  try {
      await conectBank();
      const account = new accountModel(req.body);
      await account.save();
      await desConectBank();      
      res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/accounts", async (req, res) => {
  try {
      conectBank();
      const account = await accountModel.find({});
      desConectBank();
      res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/accounts/:id", async (req, res) => {
  try {
      conectBank();
      const account = await accountModel.findByIdAndUpdate({_id: req.params.id},req.body, {new: true});
      desConectBank();
      res.send(account);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Numero 04
app.patch("/deposit", async (req, res) => {
  try {
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    const value = req.body.valor;
    conectBank();
    const account = await accountModel.find({$and:
                                            [{agencia: agencia}, 
                                            {conta: conta}]});
    if (account.length === 0){
      res.status(400).send("Conta e agencia não encontrados");
    } else {
      const newBalance = account[0].balance + value;
      const retorno = await accountModel.findByIdAndUpdate({_id: account[0]._id}, {balance: newBalance}, {new: true});
      res.send(`O novo saldo da conta ${retorno.conta} da agência ${retorno.agencia} é ${retorno.balance}`);
    }
    desConectBank();
  } catch (err) {
    res.status(500).send(err);
  }
});

//Numero 05
app.patch("/saque", async (req, res) => {
  try {
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    const value = req.body.valor;
    conectBank();
    const account = await accountModel.find({$and:
                                            [{agencia: agencia}, 
                                            {conta: conta}]});
    if (account.length === 0){
      res.status(400).send("Conta e agencia não encontrados");
    } else {
      const newBalance = account[0].balance - value - 1;
      if (newBalance < 0){
        res.status(400).send("Saldo da conta insuficiente");
      } else {
        const retorno = await accountModel.findByIdAndUpdate({_id: account[0]._id}, {balance: newBalance}, {new: true});
        res.send(`O novo saldo da conta ${retorno.conta} da agência ${retorno.agencia} é ${retorno.balance}`);
      }
    }
    desConectBank();
  } catch (err) {
    res.status(500).send(err);
  }
});

//Numero 08
app.patch("/trf", async (req, res) => {
  try {
    const contaOrigem = req.body.contaOrigem;
    const contaDestino = req.body.contadestino;
    const value = req.body.valor;
    conectBank();
    const accountOri = await accountModel.find({conta: contaOrigem});
    const accountDes = await accountModel.find({conta: contaDestino});

    if (accountOri.length === 0){
      res.status(400).send("Conta de origem não encontrada");
    } else {
      if (accountDes.length === 0){
        res.status(400).send("Conta de destino não encontrada");
      } else {
        const tarifa = accountOri[0].agencia === accountDes[0].agencia ? 0 : 8;
        const newBalanceOrigem = accountOri[0].balance - value - tarifa;
        const newBalanceDestino = accountDes[0].balance + value;
        
        if(newBalanceOrigem < 0){
          res.status(400).send("Saldo insuficiente para transferência"); 
        } else {
          const retornoOri = await accountModel.findByIdAndUpdate({_id: accountOri[0]._id}, {balance: newBalanceOrigem}, {new: true});
          const retornoDes = await accountModel.findByIdAndUpdate({_id: accountDes[0]._id}, {balance: newBalanceDestino}, {new: true});
          res.send(`O novo saldo da conta ${retornoOri.conta} da agência ${retornoOri.agencia} é ${retornoOri.balance}`);
        }
      }
    }
    desConectBank();
  } catch (err) {
    res.status(500).send(err);
  }
});

//Numero 06
app.get("/saldo", async (req, res) => {
  try {
    const agencia = req.body.agencia;
    const conta = req.body.conta;
    conectBank();
    const account = await accountModel.find({$and:
                                            [{agencia: agencia}, 
                                            {conta: conta}]});
    if (account.length === 0){
      res.status(400).send("Conta e agencia não encontrados");
    } else {
      res.send(`O saldo da conta ${account[0].conta} da agência ${account[0].agencia} é ${account[0].balance}`);
    }
    desConectBank();
  } catch (err) {
    res.status(500).send(err);
  }
});

//Numero 07
app.delete("/deleteAccount", async (req, res) => {
  try {
      const agencia = req.body.agencia;
      const conta = req.body.conta;
      conectBank();
      const account = await accountModel.find({$and:
                                              [{agencia: agencia}, 
                                              {conta: conta}]});
      if (account.length === 0){
        res.status(400).send("Conta e agencia não encontrados");
      } else {
        const retorno = await accountModel.findByIdAndDelete({_id: account[0]._id});
        if (!retorno){
          res.status(400).send("Documento não encontrado");
        } else {
          await accountModel.countDocuments({agencia: agencia}, function (err, count) {
            res.status(200).send(`Documento excluido, na agencia existem ${count} contas ativas`);
          });
        }
      }
      desConectBank();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/accounts/:id", async (req, res) => {
  try {
      conectBank();
      const account = await accountModel.findByIdAndDelete({_id: req.params.id});
      desConectBank();
      if (!account){
        res.status(400).send("Documento não encontrado");
      } else {
        res.status(200).send("Documento excluido");
      }
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as accountRouter };