import { Links } from './link.interface';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'nav-top',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <ul class="flex gap-5 justify-around ">
      @for (item of link; track $index) {
      <li
        class="hover:border-yellow-300 border-b-2 transition-all duration-300 ease-in-out"
        routerLinkActive="border-yellow-400 text-gray-600 transition-all duration-300 ease-in-out"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="item.link">{{item.nombre}}</a>
      </li>
      }

      <!-- <li><a class="navBar-list-opt" href="/products/new/">agregar</a></li> -->
    </ul>
  `,
  styles: ``,
})
export class NavTopComponent {
  @Input() link: Links[] = [];
}
