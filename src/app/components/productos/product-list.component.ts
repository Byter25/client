import { Component, inject, signal } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, RouterLink,CurrencyPipe],
  template: `<section class="absolute w-full flex flex-col justify-center items-center gap-16">
    <input type="text" name="busqueda" id="busqueda" class="border-2 w-1/2 mt-5 px-5 h-8 rounded-full border-yellow-300">
    <table class="w-4/5 border-2 rounded-xl border-yellow-400 font-mono">
      <tr class="uppercase h-10">
        <td class="border border-yellow-300 px-5 ">ID</td>
        <td class="border border-yellow-300 px-5">nombre</td>
        <td class="border border-yellow-300 px-5">descripcion</td>
        <td class="border border-yellow-300 px-5">precio</td>
        <td class="border border-yellow-300 px-5">acciones</td>

      </tr>
      <tr class="h-10" *ngFor="let item of arrProducts()" >
        <td class="border border-yellow-300 px-5">{{item._id}}</td>
        <td class="border border-yellow-300 px-5">{{item.nombre}}</td>
        <td class="border border-yellow-300 px-5">{{item.descripcion}}</td>
        <td class="border border-yellow-300 px-5">{{item.precio | currency:'PEN':'S/'}}</td>
        <td class="border border-yellow-300 px-5"> <button class=" rounded-lg bg-yellow-300 px-2 py-1 uppercase">editar</button> </td>
      </tr>
    </table>
    <ul class=" left-0 grid grid-cols-3 gap-10 p-5 ">
    <li class="relative w-56 h-52 p-2 font-mono border border-red-600" *ngFor="let item of arrProducts()">
      <div [routerLink]="['/products', item._id]">
        <span class="uppercase font-bold">Nombre:</span>
        <p class="capitalize">{{ item.nombre }}</p>
        <span class="font-bold uppercase">Descripcion:</span>
        <p class="capitalize">{{ item.descripcion }}</p>
        <span class="font-bold uppercase">Precio:</span>
        <p class="capitalize"> {{ item.precio }}</p>
      </div>
      <a class="absolute right-5 w-20 border p-2" href="/products/edit/{{ item._id }}"> Añadir</a>
    </li>
  </ul>
  </section>`,
  styleUrls: [],
})
export class ProductListComponent {
  arrProducts = signal(<any[]>[]);
  productService = inject(ProductsService);

  async ngOnInit() {
    const products = await this.productService.getAll();
    // console.log(products)
    this.arrProducts.set(products);
  }
}
