import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logger',
  standalone: true,
})
export class LoggerPipe implements PipeTransform {
  transform<T>(value: T, ...args: T[]): void {
    console.log(value, ...args);
  }
}
