import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-product-details',
  imports: [CurrencyPipe, MatIconModule, RouterLink],
  template: `<main
    class="absolute flex justify-center items-center top-0 w-full h-full bg-gray-600/50 backdrop-blur-sm transition-colors duration-200 before:bg-none"
  >
    <div class="max-w-md w-96 px-4 py-2 bg-slate-50 text-right rounded-md shadow-md shadow-black/50">
      <a routerLink="../"><mat-icon class="hover:text-red-600">close</mat-icon></a>
      <!-- <img src="" alt="img" class="h-10"> -->
      <div class="bg-gray-600 h-72 w-full"></div>
      <div class="py-2 text-left">
        <p>{{ product().nombre }}</p>
        <span>Caracteristicas</span>
        <p>{{ product().descripcion }}</p>
        <button class=" bg-yellow-400 rounded-md py-2 px-4 text-white">
          Comprar <span>{{ product().precio | currency : 'PEN' : 'S/' }}</span>
        </button>
      </div>
    </div>
  </main>`,
  styleUrls: [],
  standalone: true,
})
export class ProductDetailsComponent {
  actviateRoot = inject(ActivatedRoute);
  productService = inject(ProductsService);
  product = signal<any>({});

  ngOnInit() {
    this.actviateRoot.params.subscribe(async (params) => {
      const product = await this.productService.getById(params['productId']);
      console.log(product)
      this.product.set(product);
    });
  }
}
