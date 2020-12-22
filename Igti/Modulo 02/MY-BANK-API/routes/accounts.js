import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let account = req.body;

    if (!account.nome || account.balance == null) {
      throw new Error("Nome e balance são obrigatórios");
    }

    const data = JSON.parse(await readFile(filename));

    account = {
      id: data.nextId++,
      nome: account.nome,
      balance: account.balance
    };

    data.accounts.push(account);

    await writeFile(filename, JSON.stringify(data, null, 2)); //Salvando arquivo formatado
    //await writeFile(filename, JSON.stringify(data)); //Salvando arquivo sem formatação
    res.send(account);
    logger.info(`${req.method} ${req.baseUrl} ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(filename));
    if (data.accounts.length < 1) {
      throw new Error("Nenhum registro encontrado");
    }
    delete data.nextId;
    logger.info(`${req.method} ${req.baseUrl} com sucesso!`);
    res.send(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(filename));
    const account = data.accounts.find(account => account.id === parseInt(req.params.id));
    if (account === undefined) {
      throw new Error("Nenhum registro encontrado");
    }
    res.send(account);
    logger.info(`${req.method} ${req.baseUrl} ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const data = JSON.parse(await readFile(filename));

    data.accounts = data.accounts.filter(account => account.id !== parseInt(req.params.id));
    await writeFile(filename, JSON.stringify(data, null, 2)); //Salvando arquivo formatado
    res.end();
    logger.info(`${req.method} ${req.baseUrl} ${req.params.id}`);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let account = req.body;
    const data = JSON.parse(await readFile(filename));

    let index = data.accounts.findIndex(a => a.id === account.id);

    if (index === -1) {
      throw new Error("Registro não encontrado!");
    }
    if (!account.nome || account.balance == null) {
      throw new Error("Nome e balance são obrigatórios");
    }
    account = {
      id: account.id,
      nome: account.nome,
      balance: account.balance
    };
    data.accounts[index] = account;

    await writeFile(filename, JSON.stringify(data, null, 2)); //Salvando arquivo formatado
    //await writeFile(filename, JSON.stringify(data)); //Salvando arquivo sem formatação
    res.send(account);
    logger.info(`${req.method} ${req.baseUrl} ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
});

router.patch("/updateBalance", async (req, res, next) => {
  try {
    const account = req.body;
    const data = JSON.parse(await readFile(filename));

    let index = data.accounts.findIndex(a => a.id === account.id);

    if (index === -1) {
      throw new Error("Registro não encontrado!");
    }
    if (account.balance == null) {
      throw new Error("Balance é obrigatório");
    }

    data.accounts[index].balance = account.balance;

    await writeFile(filename, JSON.stringify(data, null, 2)); //Salvando arquivo formatado
    //await writeFile(filename, JSON.stringify(data)); //Salvando arquivo sem formatação
    res.send(data.accounts[index]);
    logger.info(`${req.method} ${req.baseUrl} ${JSON.stringify(data.accounts[index])}`);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;