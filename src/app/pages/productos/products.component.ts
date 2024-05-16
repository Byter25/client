import { Component, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Api1Service } from '../../core/services/api1.service';
import { MatIconModule } from '@angular/material/icon';
import { DetallesComponent } from "./components/detalles.component";
import { CarritoComprasComponent } from './components/carritoCompras.component';
import { MenuCategoriasComponent } from "./components/menuCategoria.component";
import { Producto } from 'src/app/core/models/producto.model';
import { Usuario } from 'src/app/core/models/usuario.model';
import { Cliente } from 'src/app/core/models/cliente.model';

@Component({
    selector: 'page-productos',
    standalone: true,
    providers: [Api1Service],
    styles: ``,
    template: `
    <menu-categorias/>
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
    </main>
    <carrito-compras></carrito-compras>
    @if(activateModal){
      <detalles
      [nomTable]="'productos'"
      [objectId]="this.objectId()"
      (cerrar)="activateModal=false"
      />
    }
  `,
    imports: [RouterModule, HttpClientModule, MatIconModule, DetallesComponent, CarritoComprasComponent, MenuCategoriasComponent]
})
export class ProductsComponent {

  objectId=signal("")
  arrProducts = signal(<any[]>[]);
  activateModal=false;

  constructor(private api:Api1Service){}

  ActivarModal(id:string){
    this.objectId.set(id)
    this.activateModal = true
  }

  async ngOnInit() {
    const data = await this.api.getAll("productos");
    // Verifica si los datos están definidos y son del tipo esperado
    this.arrProducts.set(data);

    // Ahora puedes trabajar con el arreglo de productos
    console.log(data);
  }
}
