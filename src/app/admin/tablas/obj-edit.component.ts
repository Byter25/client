import { Component, Input, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api1Service } from 'src/app/core/services/api1.service';
import { MatIconModule } from '@angular/material/icon';
import { ObjBaseComponnet } from './obj-base.component';
import { CommonModule } from '@angular/common';
import { Campos, filtrarCampos } from 'src/app/core/models/tabla.model';
import { Product } from 'src/app/core/models/producto.model';

interface Field {
  name: string;
  label: string;
  type: string;
}
@Component({
  selector: 'app-obj-edit',
  standalone: true,
  providers: [Api1Service],
  imports: [ReactiveFormsModule, MatIconModule, RouterLink, CommonModule],
  template: `<main
    class="absolute z-20 top-0 w-full h-full flex justify-center items-center bg-gray-400/50 backdrop-blur-md"
  >
    <form
      [formGroup]="formDynamic"
      (ngSubmit)="onSubmit()"
      class="relative text-sm rounded-md text-right bg-gray-100 p-4"
    >
      <button (click)="cerrar.emit(false)">
        <mat-icon>close</mat-icon>
      </button>

      <div class="grid grid-cols-3 gap-4">
        <p class="col-start-1">ID producto:</p>
        <span>{{ productIdEdit()._id }}</span>
        @for(field of fields;track field){
        <label [for]="field.name" class="col-start-1 px-4 py-2"
          >{{ field.label }}:</label
        >
        <input
          class="col-start-2 col-span-2 py-2 px-4"
          [type]="field.type"
          [id]="field.name"
          [formControlName]="field.name"
        />
        }
        <p class="col-start-1">Fecha Creacion:</p>
        <span>{{ productIdEdit().createdAt }}</span>
        <p class="col-start-1">Ultima Actualizacion:</p>
        <span>{{ productIdEdit().updatedAt }}</span>
      </div>
      <button
        type="submit"
        class="rounded-md px-4 py-2 bg-green-500 hover:bg-green-600 col-start-2"
      >
        Guardar
      </button>
    </form>
  </main>`,
  styleUrls: [],
})
export class ObjEditComponent extends ObjBaseComponnet {
  @Input() campos: Campos[] = [];
  formDynamic: FormGroup;
  fields: any[] = [];
  productIdEdit = signal(<any>{});

  constructor(private api: Api1Service, private fb: FormBuilder) {
    super();
    this.formDynamic = this.fb.group({});
  }

  async ngOnInit() {
    const camposFiltrados = filtrarCampos(this.campos);

    this.fields = camposFiltrados.map((field) => ({
      name: field.nombre,
      label: field.nombre,
      type: field.tipo || 'text',
    }));
    this.fields.forEach((field) => {
      this.formDynamic.addControl(
        field.name,
        this.fb.control('', Validators.required)
      );
    });

    const productEdit = await this.api.getById(this.nomTable, this.objectId);
    let { createdAt, updatedAt, _id, ...q } = productEdit; // crea un nuevo objeto q

    this.productIdEdit.set(productEdit);
    // rellena formulario
    this.formDynamic.setValue(q);
  }

  async onSubmit() {
    const response = await this.api.update(
      this.nomTable,
      this.objectId,
      this.formDynamic.value
    );
    console.log(response);
  }
}
