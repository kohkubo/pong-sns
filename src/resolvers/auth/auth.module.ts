import { Module } from '@nestjs/common';

import { AuthController } from '@/controllers/auth/auth.controller';
import { PrismaModule } from '@/resolvers/prisma/prisma.module';
import { AuthService } from '@/services/auth/auth.service';
import { PrismaService } from '@/services/prisma/prisma.service';

@Module({
  controllers: [AuthController],
  imports: [PrismaModule],
  providers: [AuthService, PrismaService],
})
export class AuthModule {}
