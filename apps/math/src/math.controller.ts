import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MathService } from './math.service';

@Controller()
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @MessagePattern({cmd: 'getHello'})
  getHello(name: string): string {
    return this.mathService.getHello(name);
  }
}
