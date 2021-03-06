import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css'],
})
export class Cmp09HttpComponent implements OnInit {
  listaTareas: Array<any> = [];
  subscriptions: Subscription = new Subscription();

  constructor(private tareasService: TareasService) {}

  ngOnInit(): void {
    const s1 = this.tareasService.getTareas().subscribe((tareas) => {
      console.log(tareas); // recibimos un objeto con las claves de las tareas y dentro sus tareas
      this.listaTareas = tareas;
    });

    const s2 = this.tareasService.tareaEliminada$.subscribe((id) => {
      this.listaTareas = this.listaTareas.filter((t) => t.id !== id);
    });
    this.subscriptions.add(s1);
    this.subscriptions.add(s2);
  }

  guardar(titulo: string) {
    const tarea = {
      // titulo: titulo, cuando se llaman igual se deja como debajo
      titulo,
      completada: false,
    };

    this.tareasService.createTarea(tarea).subscribe((data) => {
      // console.log(data);
      const idTarea = data.name;
      this.listaTareas.push({ ...tarea, id: idTarea });
    });
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
