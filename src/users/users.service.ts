import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async updateProblemsFlag(): Promise<number> {
    await this.usersRepository.update({}, { has_issues: false });

    const count = await this.usersRepository.count({
      where: { has_issues: true },
    });

    return count;
  }
}
