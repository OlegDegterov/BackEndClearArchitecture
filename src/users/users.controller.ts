import { BaseController } from "../common/base.controller";
import { Request, Response, NextFunction } from "express";
import { LoggerService } from "../logger/logger.service";
import { HTTPError } from "../errors/http-error.class";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import "reflect-metadata";
import { IUserController } from "./users.controller.interface";
import { UserLoginDto } from "./dto/user-login.dto";
import { UserRegisterDto } from "./dto/user-register.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { ILogger } from "../logger/logger.interface";
import { ValidateMiddleware } from "../common/validate.middleware";

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(
    @inject(TYPES.ILogger) private loggerService: ILogger,
    @inject(TYPES.UserService) private userService: UserService
  ) {
    super(loggerService);
    this.bindRoutes([
      {
        path: "/register",
        method: "post",
        func: this.register,
        middlewares: [new ValidateMiddleware(UserRegisterDto)],
      },
      { path: "/login", method: "post", func: this.login },
    ]);
  }
  login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction) {
    console.log(req.body);
    next(new HTTPError(401, "Authorization error", "login"));
  }

  async register(
    { body }: Request<{}, {}, UserRegisterDto>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const result = await this.userService.createUser(body);
    if (!result) {
      return next(new HTTPError(422, "That user already exist"));
    }
    this.ok(res, result);
  }
}
