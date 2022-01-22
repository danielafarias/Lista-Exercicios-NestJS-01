import { Injectable, NotAcceptableException } from '@nestjs/common';
import { StringArray, NumericArray } from './dto/sort.dto';

@Injectable()
export class SortService {
  string(entries: StringArray): string[] {
    const example = ["'a'", "'b'", "'c'"];
    if (typeof entries.array !== typeof example) {
      throw new NotAcceptableException(
        `É aceitado apenas uma array de strings. Exemplo: [${example}]`,
      );
    }
    const result = entries.array.sort();
    return result;
  }

  stringReverse(entries: StringArray): string[] {
    const example = ["'a'", "'b'", "'c'"];
    if (typeof entries.array !== typeof example) {
      throw new NotAcceptableException(
        `É aceitado apenas uma array de strings. Exemplo: [${example}]`,
      );
    }
    const result = entries.array.sort().reverse();
    return result;
  }

  numeric(entries: NumericArray): number[] {
    const example = [1, 2, 3];
    if (typeof entries.array !== typeof example) {
      throw new NotAcceptableException(
        `É aceitado apenas uma array de numbers. Exemplo: [${example}]`,
      );
    }
    const result = entries.array.sort();
    return result;
  }

  numericReverse(entries: NumericArray): number[] {
    const example = [1, 2, 3];
    if (typeof entries.array !== typeof example) {
      throw new NotAcceptableException(
        `É aceitado apenas uma array de numbers. Exemplo: [${example}]`,
      );
    }
    const result = entries.array.sort().reverse();
    return result;
  }
}
