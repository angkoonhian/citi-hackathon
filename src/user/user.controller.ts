import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { userDTO, userLoginDTO, userSignUpDTO } from './model/user.model';

@ApiTags('user')
@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  loginUser(@Body() userLoginDTO: userLoginDTO) {
    return this.userService.userLogin(
      userLoginDTO.username,
      userLoginDTO.password,
    );
  }

  @Get('/:id')
  @ApiOperation({ summary: 'get all user' })
  getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put('/updateUser')
  @ApiOperation({ summary: 'update user' })
  updateUser(@Body() userDTO: userDTO) {
    return this.userService.updateUser(userDTO);
  }
}
