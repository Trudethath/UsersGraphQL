import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class getUserArgs {
  @Field()
  @IsNotEmpty()
  userId: string;
}
