import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { getUserArgs } from './dto/args/get-user.args';
import { getUsersArgs } from './dto/args/get-users.args';

import { CreateUserInput } from './dto/input/create-user.input';
import { DeleteUserInput } from './dto/input/delete-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/user';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User)
  getUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    const user = this.usersService.findOne(id);
    return user;
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => User)
  updateUser(@Args('id', { type: () => Int }) id: number): Promise<User> {
    const user = this.usersService.findOne(id);
    console.log(user);
    return user;
  }
}
