import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'users',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Не используйте это в продакшене, используйте миграции
    }),
    UsersModule,
  ],
})
export class AppModule {}
