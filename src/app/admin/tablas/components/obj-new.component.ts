import { Component, Input, inject, signal } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Api1Service } from 'src/app/core/services/api1.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ObjListComponent } from './obj-list.component';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DbService } from 'src/app/core/services/db.service';
import { ObjBaseComponnet } from './obj-base.component';
import { Campos, filtrarCampos } from 'src/app/core/models/tabla.model';
@Component({
  selector: 'app-obj-new',
  standalone: true,
  providers: [Api1Service],
  imports: [
    ObjListComponent,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    RouterLink,
    CommonModule,
  ],
  template: ` <main
    class="fixed w-full h-full z-50 top-0 bg-gray-400/50 backdrop-blur-md flex justify-center items-center"
  >
    <form
      class="max-w-md bg-gray-100 p-4 rounded-md text-right text-sm"
      [formGroup]="formDynamic"
      (ngSubmit)="onSubmit()"
    >
      <button (click)="cerrar.emit(false)">
        <mat-icon>close</mat-icon>
      </button>
      <div class="grid gap-5">
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
      </div>
      <button
        class="py-2 px-4 col-start-2 uppercase bg-green-500 rounded-md"
        type="submit"
        [disabled]="formDynamic.invalid"
      >
        agregar
      </button>
    </form>
  </main>`,
})
export class ObjNewComponent extends ObjBaseComponnet {
  constructor(private api: Api1Service, private fb: FormBuilder) {
    super();
    this.formDynamic = this.fb.group({});
  }

  @Input() campos: Campos[] = [];
  formDynamic: FormGroup;
  fields: any[] = [];

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
  }

  async onSubmit() {

    const product = this.formDynamic.value;
    const response = await this.api.create(this.nomTable, product);
    console.log(this.nomTable,product)
    console.log(response);
  }
}
