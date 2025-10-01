import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserTypesModule } from './user_types/user_types.module';

@Module({
  imports: [UsersModule, UserTypesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
