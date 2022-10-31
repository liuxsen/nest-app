import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
