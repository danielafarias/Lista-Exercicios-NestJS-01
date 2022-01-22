import { Injectable } from '@nestjs/common';
import {
  TwoValuesDto,
  OneValueDto,
  PercentDto,
  RadDto,
} from './dto/calculator.dto';

@Injectable()
export class CalculatorService {
  sum(entries: TwoValuesDto): number {
    const result = entries.value1 + entries.value2;
    return result;
  }

  subtraction(entries: TwoValuesDto): number {
    const result = entries.value1 - entries.value2;
    return result;
  }

  division(entries: TwoValuesDto): number {
    const result = entries.value1 / entries.value2;
    return result;
  }

  multiplication(entries: TwoValuesDto): number {
    const result = entries.value1 * entries.value2;
    return result;
  }

  pow(entries: TwoValuesDto): number {
    const result = Math.pow(entries.value1, entries.value2);
    return result;
  }

  sqrt(entries: OneValueDto): number {
    const result = Math.sqrt(entries.value);
    return result;
  }

  percent(entries: PercentDto): number {
    const result = (entries.percent / 100) * entries.value;
    return result;
  }

  sin(entries: RadDto): number {
    const result = Math.sin(entries.radians) * entries.radius;
    return result;
  }

  cos(entries: RadDto): number {
    const result = Math.cos(entries.radians) * entries.radius;
    return result;
  }

  tan(entries: OneValueDto): number {
    const result = Math.tan(entries.value);
    return result;
  }
}
