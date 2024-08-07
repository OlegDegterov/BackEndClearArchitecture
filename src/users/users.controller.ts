import { BaseController } from "../common/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import "reflect-metadata";

@injectable()
export class UserController extends BaseController {
  constructor(@inject(TYPES.ILogger) private loggerService: LoggerService) {
    super(loggerService);
    this.bindRoutes([
      { path: "/register", method: "post", func: this.register },
      { path: "/login", method: "post", func: this.login },
    ]);
  }
  login(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, "login");
    next(new HTTPError(401, "Authorization error", "login"));
  }

  register(req: Request, res: Response, next: NextFunction) {
    // this.ok(res, "register");
  }
}
