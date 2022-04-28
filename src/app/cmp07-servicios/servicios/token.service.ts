import { Injectable } from '@angular/core';
import { EventosService } from './eventos.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private KEY: string = 'jwt';
  usuarioLogueado = new EventEmitter<boolean>();

  usuarioLogueado$: BehaviorSubject<boolean>;

  // constructor(private eventosService: EventosService) {}
  constructor(private tokenService: TokenService) {
    const token = tokenService.getToken();
    this.usuarioLogueado$ = new BehaviorSubject<boolean>(token ? true : false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.KEY);
  }

  setToken(token: string) {
    localStorage.setItem(this.KEY, token);
    // this.eventosService.usuarioLogueado.emit(true);
  }

  delToken() {
    localStorage.removeItem(this.KEY);
    // this.eventosService.usuarioLogueado.emit(false);
  }
}
