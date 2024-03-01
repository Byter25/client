import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Api1Service } from 'src/app/core/services/api1.service';
import { MatIconModule } from '@angular/material/icon';
import { ObjBaseComponnet } from './obj-base.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-obj-delete',
  standalone: true,
  providers: [Api1Service],
  imports: [ReactiveFormsModule, MatIconModule, RouterLink, CommonModule],
  template: `<main
    class="fixed z-20 top-0 w-full h-full flex justify-center items-center bg-gray-400/50 backdrop-blur-md"
  >
    <div class="relative text-sm rounded-md bg-gray-100 p-4">
      <h2 class="py-2 px-4">
        <b>¿Seguro que deseas elimar el siguiente dato?</b>
      </h2>
      <h3 class="py-2 px-4 text-center">{{ productIdEdit._id }}</h3>
      <div
        *ngFor="let a of productIdEdit | keyvalue"
        class="grid grid-cols-2 col-span-2"
      >
        <p class="col-start-1">{{ a.key }}</p>
        <p class="col-start-2">{{ a.value }}</p>
      </div>
      <button
        class="rounded-md px-4 py-2 text-center bg-green-500 hover:bg-green-600"
        (click)="cerrar.emit(false)"
      >
        NO
      </button>
      <button
        class="rounded-md px-4 py-2 bg-red-500 hover:bg-red-600"
        (click)="onSubmit()"
      >
        SI
      </button>
    </div>
  </main>`,
})
export class ObjDeleteComponent extends ObjBaseComponnet {
  constructor(private route: ActivatedRoute, private apiService: Api1Service) {
    super();
  }
  productIdEdit = <any>{};

  async ngOnInit() {
    this.productIdEdit = await this.apiService.getById(
      this.nomTable,
      this.objectId
    );
  }

  onSubmit() {
    this.apiService.delete(this.nomTable, this.objectId).subscribe(
      (res) => {
        console.log(res);
        this.apiService.getAll(this.nomTable);
      },
      (err) => {
        console.error(err);
      }
    );
    this.cerrar.emit(false);
  }
}
