import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  imports: [CommonModule,RouterModule],
  template: `
  <nav
    class="sticky flex w-full h-8 top-0  items-center bg-yellow-500 uppercase"
  >
    <h1 class="text-center mx-auto">Muebleria</h1>
    <ul class="flex  w-1/2 justify-around bg-red-500">
      <li [routerLink]="['/']">Inicio</li>
      <li [routerLink]="['/products']">Productos</li>
      <li [routerLink]="['/services']">Servicios</li>
      <li [routerLink]="['/login']">Login</li>
      <!-- <li><a class="navBar-list-opt" href="/products/new/">agregar</a></li> -->
    </ul>
  </nav>`,
  styleUrls: [],
  standalone: true,
})
export class NavegacionComponent {
  title = 'client';
}
