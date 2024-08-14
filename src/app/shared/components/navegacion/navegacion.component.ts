import { Links } from './link.interface';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { NavTopComponent } from './nav-top.component';
import { NavRigthComponent } from "./nav-rigth.component";
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavTopComponent, NavRigthComponent],
  template: ` <nav
    class="sticky flex z-[100] w-full h-14 px-4 py-2 shadow-md shadow-gray-300 justify-between items-center bg-white uppercase font-bold text-sm text-gray-400"
  >
  <nav-rigth [link]="links" class="md:hidden"/>
    <span class="m-0 hidden md:block">{{ title }}</span>
    <nav-top [link]="links" class="hidden md:block"/>
    <span class="m-0">{{ title }}</span>
  </nav>`,
  styleUrls: [],
})
export class NavegacionComponent {
  links:Links[] = [
    {nombre:'inicio', link:''},
    {nombre:'productos', link:'services'},
    {nombre:'nosotros', link:'about'},
    {nombre:'contacto', link:'contac'},
  ]
  title = 'proyecta y diseña hogar';
}
