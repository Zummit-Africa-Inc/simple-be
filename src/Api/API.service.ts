import { Injectable } from '@nestjs/common';
import { Apis } from './db';
import { v4 as uuid } from 'uuid';
import { findApiDto, CreateApiDto } from './dto/api.dto';

@Injectable()
export class ApiService {
  private Apis = Apis;
  getApi(): findApiDto[] {
    return this.Apis;
  }

  CreateApi(payload: CreateApiDto): findApiDto {
    const newApi = {
      id: uuid(),
      ...payload,
    };
    this.Apis.push(newApi);
    return newApi;
  }
}
