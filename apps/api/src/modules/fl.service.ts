import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { TrainFlDto } from './dto/train-fl.dto';

@Injectable()
export class FlService {
  constructor(private readonly http: HttpService) {}

  async trainOnClient(data: TrainFlDto) {
    const res$ = this.http.post('/train', data);
    const res = await lastValueFrom(res$);
    return res.data; // local_update
  }

  async aggregate(models: any[]) {
    const res$ = this.http.post('/aggregate', models);
    const res = await lastValueFrom(res$);
    return res.data; // global_model
  }
}
