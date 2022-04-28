import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css'],
})
export class Cmp08ObservablesComponent implements OnInit {
  mostrar = true;

  constructor() {}

  ngOnInit(): void {
    const obs1 = new Observable((subscriber: Subscriber<string>) => {
      subscriber.next('Bienvenido');
      setTimeout(() => {
        subscriber.next('Cómo lo llevas??');
      }, 2000);

      setTimeout(() => {
        // subscriber.error('Ha ocurrido un error');
        subscriber.complete();
      }, 3500);
    });

    obs1.subscribe({
      next: (msg: string) => {
        console.log(msg);
      },
      //  equivalente al catch de las promesas
      error: (err) => {
        console.log('Error: ' + err);
      },
      // podría ser equivalente al finally de las promesas
      complete: () => {
        console.log('Se ha terminado');
      },
    });
  }
}
