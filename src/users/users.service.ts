import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(createUserData: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserData);

    return this.userRepository.save(newUser);
  }

  findOne(userId: number): Promise<User> {
    return this.userRepository.findOneBy({ userId });
  }

  public findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}
