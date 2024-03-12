import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  template: `
  <nav
    class="sticky flex z-[100] w-full h-10 top-0 px-4 py-1 shadow-lg shadow-black/40 justify-between items-center bg-yellow-500 capitalize text-sm font-medium"
  >
    <span class="m-0">{{title}}</span>
    <ul class="flex w-1/2 justify-around">
      <li> <a routerLink="/">Inicio</a></li>
      <li> <a routerLink="/productos">Productos</a></li>
      <li> <a routerLink="/services">Services</a></li>
      <li> <a routerLink="/sesion">Login</a></li>
      <!-- <li><a class="navBar-list-opt" href="/products/new/">agregar</a></li> -->
    </ul>
  </nav>`,
  styleUrls: [],
})
export class NavegacionComponent {
  title = 'proyecta y diseña hogar';
}
