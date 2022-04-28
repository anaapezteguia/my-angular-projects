import { Component, OnInit } from '@angular/core';
import { DescuentoPipe } from './descuento.pipe';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css'],
})
export class Cmp05PipesComponent implements OnInit {
  finSubstring: number = 150;

  producto = {
    nombre: 'one plus 8',
    descripcion:
      'Praesent quam orci, mollis vitae mattis tempus, porta et nisi. Nullam nec dolor ut neque efficitur commodo vel at est. Vestibulum feugiat, augue eget tristique ullamcorper, enim arcu ornare risus, vel ultricies arcu felis at purus. Mauris ac purus eros. Vivamus iaculis congue commodo. Aenean ipsum nisi, vulputate rutrum sem et, commodo dictum ex. Proin eu venenatis purus.',
    precio: 385,
    fechaDeCompra: new Date(),
  };

  count = 0;

  textoFiltro: string = '';

  productos: Array<string> = ['One Plus 8', 'iPhone X', 'Samsung Galaxy 5'];

  mensaje = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hola mundo...');
    }, 200);
  });

  constructor() {}

  ngOnInit(): void {
    // console.log(new DescuentoPipe().transform(200, 10));
  }

  addProducto(event: any) {
    // this.productos.push(event.target.value);
    this.productos = [...this.productos, event.target.value];
  }
}
