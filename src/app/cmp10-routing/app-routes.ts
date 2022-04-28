import { RouterModule, Routes } from '@angular/router';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { Error404Component } from './error404/error404.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

// array de rutas anidadas a usuarios
const USUARIOS_ROUTES: Routes = [
  {
    path: ':id/info',
    component: InfoUsuarioComponent,
    canActivate: [IsLoggedInGuard],
  },
  { path: ':id/editar', component: EditarUsuarioComponent },
];

// array de rutas
const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  // { path: 'usuarios/:id', component: InfoUsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: '**', component: Error404Component },
];
// patchMatch: 'full' se pone para evitar entrar
// en un bucle infinito, esto busca una coincidencia al 100 %
// la ruta comodin '**' siempre tiene que ir a final para
// que se ejecute solo en el caso de que no encuentre una de las anteriores
// children anida unas rutas con otras

// módulo routing (añadir a app.module.ts)
// en el curso avanzado creamos nuestro propio router
export const RoutingModule = RouterModule.forRoot(APP_ROUTES);
