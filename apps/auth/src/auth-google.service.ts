import { Injectable } from '@nestjs/common';
import { GoogleTokens } from './auth-google.types';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleAuthService {
  constructor(private configService: ConfigService) {}

  async getInitGoogleLoginUrl(): Promise<any> {
    const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');

    url.searchParams.append('client_id', process.env.GOOGLE_AUTH_CLIENT_ID);
    url.searchParams.append('redirect_uri', 'your-redirect-uri');
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('scope', 'email profile');
    url.searchParams.append('access_type', 'offline');
    url.searchParams.append('prompt', 'consent');

    return url.toString();
  }

  async getGoogleToken(code: string): Promise<GoogleTokens> {
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: JSON.stringify({
        code,
        client_id: 'your-client-id',
        client_secret: 'your-client-secret',
        redirect_uri: 'your-redirect-uri',
        grant_type: 'authorization_code',
      }),
    });

    return response.json();
  }
}
