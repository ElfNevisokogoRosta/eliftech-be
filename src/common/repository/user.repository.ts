import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from 'db/entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(user: Partial<User>) {
    const isUser = await this.findOneByOrFail({ email: user.email });
    if (isUser) {
      throw new ConflictException('User with this email already exists.');
    }
    return await this.save(user);
  }

  async getUser(id: number) {
    const isUser = await this.findOne({
      where: { id },
      relations: ['member'],
    });
    if (!isUser) {
      throw new NotFoundException('User not found.');
    }
    return isUser;
  }

  async getUserInfo(email: string) {
    const user = await this.findOneBy({ email });
    if (!user) {
      throw new NotFoundException('Something whent wrong');
    }
    return user;
  }
}
