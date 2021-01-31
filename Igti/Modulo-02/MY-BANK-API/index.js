import express from "express";
import accountsRouter from "./routes/accounts.js";
import { promises as fs } from "fs";
import winston from "winston";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js";

global.filename = "accounts.json";

const { readFile, writeFile } = fs;

const { combine, printf, label, timestamp } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: "my-bank-api.log" })
  ],
  format: combine(
    label({ label: "my-bank-api" }),
    timestamp(),
    myFormat
  )
});

const app = express();
app.use(express.json());

app.use("/accounts", accountsRouter);
app.use(cors()); //Liberação para todos os dominios
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3000, async () => {
  try {
    await readFile(filename);
    logger.info("Api Started!");
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: []
    }
    writeFile(filename, JSON.stringify(initialJson)).then(() => {
      logger.info("Api Started and file created!");
    }).catch(err => {
      logger.error(err);
    });
  }
});