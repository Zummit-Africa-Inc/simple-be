import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiService } from './API.service';
import { CreateApiDto, findApiDto } from './dto/api.dto';

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post()
  CreateApi(@Body() body: CreateApiDto): findApiDto {
    console.log(body);
    return this.apiService.CreateApi(body);
  }

  @Get()
  getApi(): findApiDto[] {
    return this.apiService.getApi();
  }
}
