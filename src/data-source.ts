import { DataSource } from 'typeorm';
import { User } from './users/user.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '23E57sQl',
  database: 'users',
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
});
