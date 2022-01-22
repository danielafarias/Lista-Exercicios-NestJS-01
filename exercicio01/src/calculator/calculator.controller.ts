import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import {
  TwoValuesDto,
  OneValueDto,
  PercentDto,
  RadDto,
} from './dto/calculator.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('sum')
  sum(@Body() entries: TwoValuesDto): number {
    return this.calculatorService.sum(entries);
  }

  @Post('subtraction')
  subtraction(@Body() entries: TwoValuesDto): number {
    return this.calculatorService.subtraction(entries);
  }

  @Post('division')
  division(@Body() entries: TwoValuesDto): number {
    return this.calculatorService.division(entries);
  }

  @Post('multiplication')
  multiplication(@Body() entries: TwoValuesDto): number {
    return this.calculatorService.multiplication(entries);
  }

  @Post('pow')
  pow(@Body() entries: TwoValuesDto): number {
    return this.calculatorService.pow(entries);
  }

  @Post('sqrt')
  sqrt(@Body() entries: OneValueDto): number {
    return this.calculatorService.sqrt(entries);
  }

  @Post('percent')
  percent(@Body() entries: PercentDto): number {
    return this.calculatorService.percent(entries);
  }

  @Post('sin')
  sin(@Body() entries: RadDto): number {
    return this.calculatorService.sin(entries);
  }

  @Post('cos')
  cos(@Body() entries: RadDto): number {
    return this.calculatorService.cos(entries);
  }

  @Post('tan')
  tan(@Body() entries: OneValueDto): number {
    return this.calculatorService.tan(entries);
  }
}
