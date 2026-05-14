import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Anson', email: 'answer@gmail.com' };
  }

  @Post('create')
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }
}
