import { Component, inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list.component';

@Component({
  selector: 'app-product-new',
  standalone: true,
  providers: [ProductsService],
  imports: [ReactiveFormsModule, ProductListComponent,HttpClientModule],
  template: `
  <form
      [formGroup]="formulario"
      (ngSubmit)="onSubmit()"
      class="flex flex-col bg-black  gap-10 m-10"
    >
      <input type="text" placeholder="nombre" formControlName="nombre" />
      <input
        type="text"
        placeholder="descripcion"
        formControlName="descripcion"
      />
      <input type="text" placeholder="precio" formControlName="precio" />
      <input type="submit" value="crear" />
    </form>`,
  styleUrls: [],
})
export class ProductNewComponent {
  formulario: FormGroup;
  productService = inject(ProductsService);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
    });
  }

  async onSubmit() {
    // console.log(this.formulario.value);
    const response = await this.productService.create(this.formulario.value);
    console.log(response);
  }
}
