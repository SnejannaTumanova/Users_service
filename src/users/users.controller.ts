import { Controller, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put('reset-problems')
  async resetProblems(): Promise<{ count: number }> {
    const count = await this.usersService.updateProblemsFlag();
    return { count };
  }
}
