import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  // nos lo llevamos al token service
  usuarioLogueado = new EventEmitter<boolean>();

  usuarioLogueado$: BehaviorSubject<boolean>;

  constructor(private tokenService: TokenService) {
    const token = tokenService.getToken();
    this.usuarioLogueado$ = new BehaviorSubject<boolean>(token ? true : false);
  }
}
