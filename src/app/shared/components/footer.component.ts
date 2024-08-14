import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <footer class="flex flex-col md:flex-row uppercase py-2 items-center justify-around bg-gray-950 text-white font-bold">
    <p>Proyecta y Diseña Hogar</p>
    <p>Derechos Reservados ©copyrigth 2024</p>
    <p>Dev Byter</p>
  </footer>`,
  styleUrls: [],
})
export class FooterComponent {
}
