import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product-edit',
  standalone: true,
  providers: [ProductsService],
  imports: [ReactiveFormsModule,MatIconModule,RouterLink],
  template: `<main
    class="absolute z-20 top-0 w-full h-full flex justify-center items-center bg-gray-400/50 backdrop-blur-md"
  >
    <form
      [formGroup]="formulario"
      (ngSubmit)="onSubmit()"
      class="relative grid  gap-5 text-sm rounded-md text-right bg-white p-4"
    >

      <a class="col-start-3" routerLink="../"><mat-icon>close</mat-icon></a>
      <span class="py-2 px-4"><b>ID:</b></span>
      <span class="col-start-2 py-2 px-4" >{{ productId }}</span>
      <label class="py-2 px-4 col-start-1" ><b>Nombre:</b></label>
      <input
        class="rounded-md px-4 py-2 bg-gray-200"
        type="text"
        placeholder="nombre"
        formControlName="nombre"
      />
      <label class="py-2 px-4 col-start-1"><b>Descripcion:</b></label>
      <input
        class="rounded-md px-4 py-2 bg-gray-200"
        type="text"
        placeholder="descripcion"
        formControlName="descripcion"
      />
      <label class="py-2 px-4 col-start-1"><b>Precio:</b></label>
      <input class="rounded-md px-4 py-2 bg-gray-200" type="text" placeholder="precio" formControlName="precio"  />
      <button class="rounded-md px-4 py-2 bg-green-500 hover:bg-green-600 col-start-2">Guardar</button>
    </form>
  </main>`,
  styleUrls: [],
})
export class ProductEditComponent {
  actviateRoot = inject(ActivatedRoute);
  productService = inject(ProductsService);
  productIdEdit = signal<any>({});
  productId:string = ""

  formulario = new FormGroup({
    nombre: new FormControl(),
    descripcion: new FormControl(),
    precio: new FormControl(),
  });

  ngOnInit() {
    this.actviateRoot.params.subscribe(async (params) => {
      this.productId = params['productId'];
      const productEdit = await this.productService.getById(this.productId);
      console.log( productEdit)
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
