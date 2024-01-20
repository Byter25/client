import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  template: `<p>{{ productIdEdit() }}</p>
    <form [formGroup]="formulario" (ngSubmit)="onSubmit()" class="formUp">
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
  imports: [ReactiveFormsModule],
})
export class ProductEditComponent {
  formulario: FormGroup;
  productIdEdit = signal('');
  activateRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
    });
  }
  ngOnInit() {
    this.activateRoute.params.subscribe(async (params) => {
      const productId = params['productId'];
      this.productIdEdit.set(productId);
      const productEdit = await this.productService.getById(productId);

      // rellena formulario
      delete productEdit._id;
      delete productEdit.__v;
      // const productCopy = {...productEdit,_id:undefined,__v:undefined}
      this.formulario.setValue(productEdit);
    });
  }

  async onSubmit() {
    // console.log(this.formulario.value);
    const response = await this.productService.update(
      this.productIdEdit(),
      this.formulario.value
    );
    console.log(response);
  }
}
