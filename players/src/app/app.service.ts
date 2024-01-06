import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string[] } {
    return { message: [
      'Player1',
      'Player2',
      'Player3',
      ] };
  }
}
