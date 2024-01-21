import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
// import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink],
  template: ` <div class="fixed flex w-full h-full z-50 border-r-black bg-gray-600/50 backdrop-blur-sm">
    <input type="checkbox" id="menu" name="menu" value="menu" class=" hidden">
    <label for="menu" class="ml-5 absolute">X</label>
    <nav class="flex flex-col justify-center uppercase">
      <ul class="flex flex-col gap-y-10 ml-2">
        <li routerLink="listProducts">a </li>
        <li routerLink="listClientes">clientes</li>
        <li routerLink="listVentas">ventas</li>
      </ul>
    </nav>
  </div>
  <router-outlet></router-outlet>`,
  styleUrls: [],
})
export class DashboardComponent {

}
