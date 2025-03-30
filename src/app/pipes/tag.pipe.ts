import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag',
  standalone: false
})
export class TagPipe implements PipeTransform {

  transform(value: string): string {
    switch(value.toLowerCase()) {
      case 'digital':
        return 'var(--ps-blue)';
      case 'new':
        return 'var(--ps-accent-orange)';
      case 'best':
        return 'var(--ps-red)';
      case 'exclusive':
        return 'var(--ps-green)';
      default:
        return 'gray';
    }
  }

}
