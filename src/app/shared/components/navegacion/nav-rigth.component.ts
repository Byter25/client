import { Component, Input } from '@angular/core';
import { Links } from './link.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nav-rigth',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `<nav>
    <input type="checkbox" class="hidden" id="navright" />
    <label class=" flex justify-center items-center" for="navright">
      <mat-icon>menu</mat-icon>
    </label>
    <ul
      id="rightnav"
      class=" -left-full z-20 fixed md:hidden top-0 w-52 bg-white h-screen text-gray-400 uppercase transition-all duration-300 ease-in-out font-bold"
    >
      <label for="navright" class="px-4 py-2">
        <mat-icon class="">close</mat-icon>
      </label>
      @for(nav of link;track nav){
      <li
        class="pl-2 py-2 border-collapse border-l-8 hover:border-yellow-300 transition-all duration-300 ease-in-out"
        routerLinkActive="border-yellow-400"
        [routerLinkActiveOptions]="{ exact: true }"
      >
        <a [routerLink]="nav.link">{{ nav.nombre }}</a>
      </li>
      }
    </ul>
  </nav> `,
  styles: [
    `
      #navright:checked ~ #rightnav {
        left: 0;
      }
    `,
  ],
})
export class NavRigthComponent {
  @Input() link: Links[] = [];
}
