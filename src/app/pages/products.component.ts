import { Component, inject, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Api1Service } from '../core/services/api1.service';
import { MatIconModule } from '@angular/material/icon';
import { ObjDetailsComponent } from "../admin/tablas/obj-details.component";

@Component({
    selector: 'app-products',
    standalone: true,
    providers: [Api1Service],
    styles: ``,
    template: `
    <main class="relative flex w-full">
      <ul class="flex flex-wrap gap-8 min-w-200 p-5">
        @for(item of arrProducts();track item._id){
        <li
          class="relative max-w-md w-64 py-2 px-4 font-mono rounded-md bg-gray-200 hover:shadow-md hover:shadow-black/50 transition-all duration-150"
        >
          <button (click)="ActivarModal(item)" class="w-full">
            <div class="w-full h-32 bg-slate-600"></div>
            <h4 class="uppercase">{{ item.nombre }}</h4>
            <span class="font-bold uppercase">Descripcion:</span>
            <p class="capitalize">{{ item.descripcion }}</p>
            <span class="font-bold uppercase">Precio:</span>
            <p class="capitalize">{{ item.precio }}</p>
          </button>
          <button
            class="flex justify-center items-center px-4 p-2 mx-auto text-white font-medium uppercase rounded-md bg-yellow-400 hover:bg-yellow-500"
          >
            <span class="pr-2">Agregar al Carrito</span>
            <mat-icon>shopping_cart</mat-icon>
          </button>
        </li>
        }
      </ul>
      <section class="w-96 bg-gray-400 py-2 px-4 right-0">
        <h1>Carrito de compras</h1>
      </section>
    </main>
    @if(activateModal){
      <app-obj-details
      [nomTable]="'productos'"
      [objectId]="this.objectId()"
      (cerrar)="activateModal=false"
      />
    }
  `,
    imports: [RouterModule, HttpClientModule, MatIconModule, ObjDetailsComponent]
})
export class ProductsComponent {
  constructor(private api:Api1Service){}
  objectId=signal("")
  arrProducts = signal(<any[]>[]);
  activateModal=false;

  ActivarModal(id:string){
    this.objectId.set(id)
    this.activateModal = true
  }
  async ngOnInit() {
    const products = await this.api.getAll("productos");
    // console.log(products)
    this.arrProducts.set(products);
  }
}
