import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login() {
    return { msg: 'I logged in' };
  }
  async signup(dto: AuthDto) {
    // generate hashed password
    const hash = await argon.hash(dto.password);
    //save new user in the db
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    // return the saved user
    return user;
  }
}
