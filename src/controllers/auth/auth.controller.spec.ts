import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from '@/controllers/auth/auth.controller';
import { AuthService } from '@/services/auth/auth.service';
import { PrismaService } from '@/services/prisma/prisma.service';

const mockCreateUserDto = () => ({
  email: 'test@test.com',
  name: 'test',
  password: 'test',
});

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService, ConfigService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    console.log(controller.login());
    console.log(controller.signup(mockCreateUserDto()));
    expect(controller.login()).resolves.toEqual({ message: 'login2' });
    expect(controller.signup(mockCreateUserDto())).resolves.toEqual({
      message: 'User already exists',
    });
  });
});
