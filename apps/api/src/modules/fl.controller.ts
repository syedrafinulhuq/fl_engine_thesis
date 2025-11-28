import { Body, Controller, Post } from '@nestjs/common';
import { FlService } from './fl.service';
import { TrainFlDto } from './dto/train-fl.dto';

@Controller('fl')
export class FlController {
  constructor(private readonly flService: FlService) {}

  @Post('train')
  async train(@Body() dto: TrainFlDto) {
    return this.flService.trainOnClient(dto);
  }

  @Post('aggregate')
  async aggregate(@Body() models: any[]) {
    return this.flService.aggregate(models);
  }
}
