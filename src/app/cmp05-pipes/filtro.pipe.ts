import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: Array<string>, filtro: string): Array<string> {
    console.log('Se ejecuta el pipe');

    return value.filter((producto) => {
      return producto.toLowerCase().includes(filtro.toLowerCase());
    });
  }
}
