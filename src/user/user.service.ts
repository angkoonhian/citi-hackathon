import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import {
  userLoginDTO,
  userLoginSuccessDTO,
  userSignUpDTO,
} from './model/user.model';
import { v4 as uuidv4 } from 'uuid';
import User from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor() {}

  public async getUserById(id: string) {
    const user = User.findOne({ userId: id }).then((result) => {
      console.log(result);
      return result;
    });
    return user;
  }

  public async updateUser(userDTO) {
    try {
      const user = await User.findOne({ userId: userDTO.userId });
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      await user.save();
      return { ...user, ...userDTO };
    } catch (BadRequestException) {
      throw BadRequestException;
    }
  }

  //   public async signUpUser(userSignUpDTO) {
  //     try {
  //       userSignUpDTO['userId'] = uuidv4();
  //       const user = await User.findOne({ name: userSignUpDTO.name });
  //       if (user) {
  //         throw new BadRequestException('User already exists');
  //       }
  //       const hashedPassword = await this.hashPassword(userSignUpDTO.password);
  //       userSignUpDTO.password = hashedPassword;
  //       userSignUpDTO.interest = null;
  //       userSignUpDTO.currentItenary = null;
  //       const savedUser = User.save(userSignUpDTO).then((result) => {
  //         console.log(result);
  //         return result;
  //       });
  //       // return savedUser;
  //     } catch (BadRequestException) {
  //       throw BadRequestException;
  //     }
  //   }

  public async userLogin(username: string, password: string) {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      console.log(user);
      await this.checkPassword(password, user.password).then((res) => {
        console.log(res);
        if (!res) {
          throw new BadRequestException('Invalid password');
        }
      });
      const token = this.getSignedJwtToken(user);
      return {
        userId: user.id,
        name: user.username,
        token: token,
        tokenExpiration: process.env.JWT_EXPIRE,
      };
    } catch (BadRequestException) {
      throw BadRequestException;
    }
  }

  private getSignedJwtToken(loginUser: userLoginDTO) {
    return sign(
      { userId: loginUser.username, userPassword: loginUser.password },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      },
    );
  }
  // Function to hash password when registering
  private async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
  }
  // Function to check if password matches with bcrypt compare
  private checkPassword(inputPassword: string, originalPassword: string) {
    return bcrypt.compare(inputPassword, originalPassword);
  }
}
