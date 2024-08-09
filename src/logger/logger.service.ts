import { ILogObj, Logger } from "tslog";

export class LoggerService {
  private logger: Logger<ILogObj>;

  constructor() {
    this.logger = new Logger({
      minLevel: 2,
      // displayInstanceName: false,
      // displayLoggerName: false,
      // displayFilePath: "hidden",
      // displayFunctionName: false,
    });
  }

  // public logInfo(message: string): void {
  //   this.logger.info(message);
  // }

  // public logError(message: string): void {
  //   this.logger.error(message);
  // }

  // public logWarn(message: string): void {
  //   this.logger.warn(message);
  // }

  // public logDebug(message: string): void {
  //   this.logger.debug(message);
  // }
  log(...arg: unknown[]) {
    this.logger.info(...arg);
  }
  error(...arg: unknown[]) {
    // send to sentry
    this.logger.error(...arg);
  }
  warn(...arg: unknown[]) {
    this.logger.warn(...arg);
  }
}
