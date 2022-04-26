import { Component, Input, OnInit } from '@angular/core';
export type Sugus = { flavour: string; colour: string };

@Component({
  selector: 'app-sugus',
  templateUrl: './sugus.component.html',
  styleUrls: ['./sugus.component.css'],
})
export class SugusComponent implements OnInit {
  // @Input() flavour: string = 'orange';
  // @Input() colour: string = 'orange';

  @Input() sugus: Sugus = {
    flavour: 'orange',
    colour: 'orange',
  };
  constructor() {}

  ngOnInit(): void {}
}
