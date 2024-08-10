import { IConfigService } from "./config.service.interface.";
import { config, DotenvConfigOutput, DotenvParseOutput } from "dotenv";
import { ILogger } from "../logger/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
// import "reflect-metadata";

@injectable()
export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;
  constructor(@inject(TYPES.ILogger) private logger: ILogger) {
    const result: DotenvConfigOutput = config();
    if (result.error) {
      this.logger.error(
        "[ConfigService] can't read file .env or it does'nt exist"
      );
    } else {
      this.logger.log("[ConfigService] config .env downloaded");
      this.config = result.parsed as DotenvParseOutput;
    }
  }
  get(key: string): string {
    return this.config[key];
  }
}
