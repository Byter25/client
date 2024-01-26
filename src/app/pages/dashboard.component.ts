import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
// import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, MatIconModule],
  template: ` <div class="fixed flex flex-col w-12 py-2 h-full z-50 justify-between items-center border-r-black bg-blue-900/50 backdrop-blur-sm">
    <input type="checkbox" id="menu" name="menu" value="menu" class=" hidden">
    <label for="menu"><mat-icon fontIcon="menu"/></label>
    <nav class="uppercase">
      <ul class="flex flex-col gap-y-5">
        <li routerLink="listProducts"><mat-icon fontIcon="table"/></li>
        <li routerLink="listClientes"><mat-icon>perm_identity</mat-icon></li>
        <li routerLink="listVentas"><mat-icon>paid</mat-icon></li>
        <li><mat-icon>analytics</mat-icon></li>
      </ul>
    </nav>
    <div>
      gola
    </div>
  </div>
  <router-outlet></router-outlet>`,
  styleUrls: [],
})
export class DashboardComponent {

}
