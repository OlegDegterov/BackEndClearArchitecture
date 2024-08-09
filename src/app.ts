import express, { Express } from "express";
import { Server } from "http";
import { LoggerService } from "./logger/logger.service";
import { UserController } from "./users/users.controller";
import { ExceptionFilter } from "./errors/exception.filter";
import { ILogger } from "./logger/logger.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import "reflect-metadata";

@injectable()
export class App {
  app: Express;
  server: Server;
  port: number;

  constructor(
    @inject(TYPES.ILogger) private logger: ILogger,
    @inject(TYPES.UserController) private userController: UserController,
    @inject(TYPES.ExceptionFilter) private exceptionFilter: ExceptionFilter
  ) {
    this.app = express();
    this.port = 8000;
  }

  useRoutes() {
    this.app.use("/users", this.userController.router);
  }

  useExceptionFilter() {
    // чтобы не потерять контекст нужно забиндить на exceptionFilter
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExceptionFilter();
    this.server = this.app.listen(this.port);
    this.logger.log(`Server started on http://localhost:${this.port}`);
    // console.log(`Server started on http://localhost:${this.port}`);
  }
}
