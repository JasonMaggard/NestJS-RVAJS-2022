import { Module } from '@nestjs/common';
import { HelloDataService } from './hello-data.service';

@Module({
  providers: [HelloDataService],
  exports: [HelloDataService],
})
export class HelloDataModule {}
