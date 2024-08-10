import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Wrong email' })
	email: string;

	@IsString({ message: 'You can fill the password' })
	password: string;

	@IsString({ message: 'You can fill the name' })
	name: string;
}
