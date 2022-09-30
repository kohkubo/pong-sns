import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthService } from './auth.service';

import { AuthController } from '@/controllers/auth/auth.controller';
import { PrismaService } from '@/services/prisma/prisma.service';

const mockCreateUserDto = () => ({
  email: 'test@test.com',
  name: 'test',
  password: 'test',
});

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService, ConfigService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(service.login).toBeDefined();
    expect(service.signup).toBeDefined();
    expect(service.login()).resolves.toEqual({ message: 'login2' });
    expect(service.signup(mockCreateUserDto())).resolves.toEqual({
      message: 'User already exists',
    });
  });
});
