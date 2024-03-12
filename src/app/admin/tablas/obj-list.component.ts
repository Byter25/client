import { Component, inject, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Api1Service } from 'src/app/core/services/api1.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-obj-list',
  standalone: true,
  providers: [Api1Service],
  imports: [
    RouterModule,
    RouterLink,
    CurrencyPipe,
    HttpClientModule,
    MatIconModule,
  ],
  template: ` <main class="w-full flex flex-col items-center gap-16">
      <div class="relative flex items-center max-w-md w-1/2 mt-5">
        <input
          class="h-8 w-full rounded-md bg-gray-200 focus:border-yellow-400 rounded-t-md flex-1 appearance-none border border-gray-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm ng-pristine ng-valid ng-touched"
          type="text"
          name="busqueda"
          id="busqueda"
        />
        <mat-icon class="absolute right-2 text-white">search</mat-icon>
      </div>
      <table class="w-4/5 border-2 rounded-xl border-yellow-400 font-mono">
        <thead>
          <tr class="uppercase h-10">
            <th class="border border-yellow-300 px-5 ">ID</th>
            <th class="border border-yellow-300 px-5">nombre</th>
            <th class="border border-yellow-300 px-5">descripcion</th>
            <th class="border border-yellow-300 px-5">precio</th>
            <th class="border border-yellow-300 px-5">acciones</th>
          </tr>
        </thead>
        <tbody>
          @for(item of arrProducts(); track item._id){
          <tr>
            <td class="border border-yellow-300 px-4 ">{{ item._id }}</td>
            <td class="border border-yellow-300 px-4">{{ item.nombre }}</td>
            <td class="border border-yellow-300 px-4">
              {{ item.descripcion }}
            </td>
            <td class="border border-yellow-300 px-4">
              {{ item.precio | currency : 'PEN' : 'S/' }}
            </td>
            <td
              class="flex gap-x-4 px-4 py-2 justify-center border border-yellow-300 text-white text-center"
            >
              <a
                class="rounded-lg bg-orange-600 hover:bg-orange-500 p-2 h-10"
                routerLink="./{{ item._id }}"
              >
                <mat-icon class="text-base">edit</mat-icon>
              </a>
              <button class="rounded-lg bg-red-700 hover:bg-red-600 p-2 h-10">
                <mat-icon class="text-base">delete</mat-icon>
              </button>
            </td>
          </tr>
          }
        </tbody>
      </table>
    </main>
    <router-outlet></router-outlet>`,
  styleUrls: [],
})
export class ObjListComponent {
  arrProducts = signal(<any[]>[]);
  api1Service = inject(Api1Service);

  async ngOnInit() {
    const products = await this.api1Service.getAll("producto");
    // console.log(products)
    this.arrProducts.set(products);
  }
}
