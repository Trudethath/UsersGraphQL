import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserInput } from './dto/input/update-user.input';
import { getUserArgs } from './dto/args/get-user.args';
import { getUsersArgs } from './dto/args/get-users.args';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Args, Int } from '@nestjs/graphql';

@Injectable()
export class UsersService {
  // private users: User[] = [];
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(createUserData: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserData);

    return this.userRepository.save(newUser);
  }

  // public updateUser(updateUserData: UpdateUserInput): User {
  //   const user = this.users.find(
  //     (user) => user.userId === updateUserData.userId,
  //   );
  //   Object.assign(user, updateUserData);

  //   return user;
  // }

  getUser(userId: number): Promise<User> {
    const user = this.userRepository.findOneBy({ userId });
    return user;
  }

  // public getUser(getUserArgs: getUserArgs): User {
  //   return this.users.find((user) => user.userId === getUserArgs.userId);
  // }

  public getUsers(): Promise<User[]> {
    const users = this.userRepository.find();
    return users;
  }

  // public deleteUser(deleteUserData: DeleteUserInput): User {
  //   const userIndex = this.users.findIndex(
  //     (user) => user.userId === deleteUserData.userId,
  //   );

  //   const user = this.users[userIndex];

  //   this.users.splice(userIndex);

  //   return user;
  // }
}
