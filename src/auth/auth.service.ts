import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  login() {
    return { msg: 'I logged in' };
  }
  signup() {
    return { msg: 'I signed up' };
  }
}
