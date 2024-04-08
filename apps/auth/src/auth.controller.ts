import { Controller, Request, Post } from '@nestjs/common';
import { GoogleAuthService } from './auth-google.service';

@Controller('auth')
export class AuthController {
  constructor(private googleAuthService: GoogleAuthService) {}

  @Post('login/google/init')
  async initGoogleLogin(@Request() req) {
    const googleLoginUrl = this.googleAuthService.getInitGoogleLoginUrl();

    console.log('googleLoginUrl', googleLoginUrl);

    return googleLoginUrl;
  }

  @Post('login/google/token')
  // google will send the code to this endpoint in request parameters
  async login(@Request() req) {
    const code = req.query.code;

    // todo check user database for user with google email

    const tokens = this.googleAuthService.getGoogleToken(code);

    // validate google token, e.g. check claims
    // await this.googleAuthService.validateGoogleTokens(tokens);
  }
}
