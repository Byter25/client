import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  template: `
  <nav
    class="sticky flex z-50 w-full h-8 top-0  items-center bg-yellow-500 uppercase"
  >
    <h1 class="text-center mx-auto">Muebleria</h1>
    <ul class="flex  w-1/2 justify-around bg-red-500">
      <li> <a routerLink="/">Inicio</a></li>
      <li> <a routerLink="/products">Productos</a></li>
      <li> <a routerLink="/services">Services</a></li>
      <li> <a routerLink="/login">Login</a></li>
      <!-- <li><a class="navBar-list-opt" href="/products/new/">agregar</a></li> -->
    </ul>
  </nav>`,
  styleUrls: [],
})
export class NavegacionComponent {
  title = 'client';
}
