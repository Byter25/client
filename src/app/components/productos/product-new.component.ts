import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ProductListComponent } from './product-list.component';

@Component({
  selector: 'app-product-new',
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
  standalone: true,
  imports: [ReactiveFormsModule, ProductListComponent],
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
