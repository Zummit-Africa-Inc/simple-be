import { Module } from '@nestjs/common';
import { ApiController } from './Api/API.controller';
import { ApiService } from './Api/API.service';

@Module({
  imports: [],
  providers: [ApiService],
  controllers: [ApiController],
})
export class AppModule {}
