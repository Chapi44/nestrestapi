import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { BookmarksModule } from './bookmarks/bookmarks.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';


@Module({
  imports: [   ConfigModule.forRoot({
    isGlobal: true,
  }),
  AuthModule, 
   BookmarksModule, 
   PrismaModule, 
   ConfigModule, UserModule
  ]

})
export class AppModule {}

