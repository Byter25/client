import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { OptionDesplegableComponent } from '../shared/components/optionDesplegable.component';
import { DbService } from '../core/services/db.service';
import { HttpClientModule } from '@angular/common/http';
// import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatIconModule,
    OptionDesplegableComponent,
    HttpClientModule
  ],
  providers: [DbService],
  template: ` <div
      class="fixed flex flex-col w-12 py-2 h-full z-50 justify-between items-center border-r-black bg-blue-900/50 backdrop-blur-sm"
    >
      <input type="checkbox" id="menu" name="menu" class="hidden" />
      <label for="menu"><mat-icon fontIcon="menu" /></label>
      <nav
        class="flex-1 uppercase w-full flex flex-col justify-center items-center"
      >
        <ul class="relative flex flex-col gap-y-5">
          <option-desplegable [MatIcon]="'table'" [nombres]="tables" />
          <option-desplegable [MatIcon]="'perm_identity'" [nombres]="tables" />
          <option-desplegable [MatIcon]="'paid'" [nombres]="tables" />
          <option-desplegable [MatIcon]="'analytics'" [nombres]="tables" />
        </ul>
      </nav>
    </div>
    <router-outlet></router-outlet>`,
})
export class DashboardComponent{
  constructor(private dbService:DbService){}
  state: boolean = false;
  tables:any[] = []
  async ngOnInit(){
    const names = await this.dbService.getColectionsAll();
    this.tables = names
  }
}
