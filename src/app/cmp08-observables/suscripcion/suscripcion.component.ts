import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css'],
})
export class SuscripcionComponent implements OnInit {
  subscriptions: Subscription = new Subscription();
  // sub1: Subscription | null = null;

  constructor() {}

  ngOnInit(): void {
    const sub = interval(1000)
      .pipe(
        filter((num) => num % 2 === 0),
        // take(5),
        map((num) => num * 3)
      )
      .subscribe((num) => {
        console.log(num);
      });
    // this.sub1 = sub;
    this.subscriptions.add(sub);
  }
  // se ejecuta justo antes de eliminar el componente,
  // como eliminar una suscripción
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
