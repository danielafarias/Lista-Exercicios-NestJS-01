import { Body, Controller, Post } from '@nestjs/common';
import { SortService } from './sort.service';
import { StringArray, NumericArray } from './dto/sort.dto';

@Controller('sort')
export class SortController {
  constructor(private readonly sortService: SortService) {}

  @Post('string')
  string(@Body() entries: StringArray): string[] {
    return this.sortService.string(entries);
  }

  @Post('string/reverse')
  stringReverse(@Body() entries: StringArray): string[] {
    return this.sortService.stringReverse(entries);
  }

  @Post('numeric')
  numeric(@Body() entries: NumericArray): number[] {
    return this.sortService.numeric(entries);
  }

  @Post('numeric/reverse')
  numericReverse(@Body() entries: NumericArray): number[] {
    return this.sortService.numericReverse(entries);
  }
}
