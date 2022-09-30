import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { PrismaModule } from './resolvers/prisma/prisma.module';

@Module({
  controllers: [AppController],
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule],
  providers: [AppService],
})
export class AppModule {}
