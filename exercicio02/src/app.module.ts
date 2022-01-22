import { Module } from '@nestjs/common';
import { SortModule } from './sort/sort.module';

@Module({
  imports: [SortModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
