import { ILogObj, Logger } from "tslog";
import { ILogger } from "./logger.interface";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export class LoggerService implements ILogger {
  logger: Logger<ILogObj>;

  constructor() {
    this.logger = new Logger({
      minLevel: 2,
    });
  }
  log(...arg: unknown[]) {
    this.logger.info(...arg);
  }
  error(...arg: unknown[]) {
    // for example send to sentry
    this.logger.error(...arg);
  }
  warn(...arg: unknown[]) {
    this.logger.warn(...arg);
  }
}
