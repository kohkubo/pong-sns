import { Controller, Post, Body } from '@nestjs/common';

import { Message } from '@/config/config.interface';
import { CreateUserDto } from '@/resolvers/user/dto/create-user.dto';
import { AuthService } from '@/services/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('signup')
  signup(@Body() createUserDto: CreateUserDto): Promise<Message> {
    console.log('a');
    console.log(createUserDto);
    return this.authService.signup(createUserDto);
  }
}
