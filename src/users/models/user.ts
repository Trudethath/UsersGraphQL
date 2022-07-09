import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  userId: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field(() => Int)
  age: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  isSubscribed?: boolean;
}
