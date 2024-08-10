import { ILogObj, Logger } from 'tslog';
import { ILogger } from './logger.interface';
import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class LoggerService implements ILogger {
	logger: Logger<ILogObj>;

	constructor() {
		this.logger = new Logger({
			minLevel: 2,
		});
	}
	log(...arg: unknown[]): void {
		this.logger.info(...arg);
	}
	error(...arg: unknown[]): void {
		// for example send to sentry
		this.logger.error(...arg);
	}
	warn(...arg: unknown[]): void {
		this.logger.warn(...arg);
	}
}
