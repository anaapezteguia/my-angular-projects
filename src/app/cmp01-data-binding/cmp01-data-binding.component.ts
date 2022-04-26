import { Component, OnInit } from '@angular/core';

type User = { name: string; surname: string; email: string };

// interface IUser {
//   name: string,
//   surname: string,
//   email: string,
// }

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css'],
})
export class Cmp01DataBindingComponent implements OnInit {
  user: User = {
    name: 'Ana',
    surname: 'Apezteguía',
    email: 'ana.apezteguia@gmail.com',
  };
  imgName: string = 'Angular';
  angularLogoUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  nombre: string = '';
  //string, number, boolean, null, undefined, any, unknown, Date
  //Array<number>, string[], {nombre: string}

  anyThing: any = 3;

  pais: string = 'France';

  constructor() {
    // this.anyThing = 'a string';
    // this.anyThing = [1, '', true];
  }

  ngOnInit(): void {}

  getName(): string {
    return this.user.name;
  }
  resetEmail(event: any): void {
    console.log(event);
    this.user.email = '';
  }
  changeEmail(event: any): void {
    this.user.email = event.target.value;
  }
}
