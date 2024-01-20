import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  template: `<h1>{{ product().nombre }}</h1>
    <h2>{{ product().descripcion }}</h2>
    <h3>{{ product().precio }}</h3>`,
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
      // console.log(product)
      this.product.set(product);
    });
  }
}
