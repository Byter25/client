import { Producto } from 'src/app/core/models/producto.model';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: ` <nav
    class="sticky flex z-[100] w-full h-14 top-0 px-4 py-1 shadow-md shadow-gray-300 justify-between items-center bg-white capitalize text-sm"
  >
    <span class="m-0">{{ title }}</span>
    <ul class="flex w-1/3 justify-around ">
      <li class="hover:border-orange-400 border-b-2" routerLinkActive="border-red-400"
          [routerLinkActiveOptions]="{ exact: true }">
          <a [routerLink]="['/']">Inicio</a>
      </li>
      <li class="hover:border-orange-400 border-b-2" routerLinkActive="border-red-400"
          [routerLinkActiveOptions]="{ exact: true }">
        <a [routerLink]="['/about']">Nosotros</a>
      </li>
      <li class="hover:border-orange-400 border-b-2" routerLinkActive="border-red-400"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="['/services']">Productos</a>
      </li>
      <li class="hover:border-orange-400 border-b-2" routerLinkActive="border-red-400"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="['/contac']">Contacto</a>
      </li>
      <!-- <li><a class="navBar-list-opt" href="/products/new/">agregar</a></li> -->
    </ul>
    <span class="m-0">{{ title }}</span>
  </nav>`,
  styleUrls: [],
})
export class NavegacionComponent {
  title = 'proyecta y diseña hogar';
}
