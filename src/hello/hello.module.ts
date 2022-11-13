import { Module } from '@nestjs/common';
import { HelloResolver } from './hello.resolver';
import { HelloDataModule } from './hello-data/hello-data.module';
import { HelloController } from './hello.controller';

@Module({
  providers: [HelloResolver],
  imports: [HelloDataModule],
  controllers: [HelloController]
})
export class HelloModule {}
