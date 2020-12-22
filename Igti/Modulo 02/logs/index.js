import express from "express";
import winston from "winston";

const app = express();
app.use(express.json());

const { combine, printf, label, timestamp } = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
//const myFormat = winston.format.printf

const logger = winston.createLogger({
      level: "silly",
      transports: [
          new(winston.transports.Console)(),
          new(winston.transports.File)({filename: "my-log.log"})
      ],
      format: combine(
          label({label: "my-app"}),
          timestamp(),
          myFormat
      )
});

logger.error("Error log");
logger.warn("Warm log");
logger.info("Info log");
logger.http("HTTP log");
logger.verbose("Verbose log");
logger.debug("Debug log");
logger.silly("Silly log");

logger.log("info", "Hello with parameters");

app.listen(3000, () => {
  console.log("API Started");
});