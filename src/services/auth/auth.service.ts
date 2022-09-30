import { Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as bcrypt from 'bcrypt';

import { Message } from '@/config/config.interface';
import { CreateUserDto } from '@/resolvers/user/dto/create-user.dto';
import { PrismaService } from '@/services/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signup(createUserDto: CreateUserDto): Promise<Message> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    try {
      await this.prisma.user.create({
        data: {
          email: createUserDto.email,
          name: createUserDto.name,
          password: hashedPassword,
        },
      });
      return { message: 'User created successfully' };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return { message: 'User already exists' };
        }
      }
      console.log(error);
      return { message: 'Something went wrong' };
    }
  }

  async login(): Promise<Message> {
    return { message: 'login2' };
  }
}
