import { Controller, Get, Post, Delete, Put, Body, Param, ParseIntPipe, UsePipes, ValidationPipe, Query } from "@nestjs/common";
import { UserDto } from "src/users/user.dto";
import { UserService } from "./user.service";



@Controller('users')
export class UserController{
  constructor( private readonly userService: UserService) {
  }

  @Get('all')
  getAllUser(@Query() data: any): Promise<UserDto[]>{
    return this.userService.find(data);
  }

  @Get('count')
  getUserCount(){
    return this.userService.count();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto>{
    return this.userService.save(user);
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto>{
    return this.userService.findOne(id);
  }

  @Delete()
  deleteUser(@Query() data: any)
  {
    return this.userService.deleteUsers(data.ids);
  }
}