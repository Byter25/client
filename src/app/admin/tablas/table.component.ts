import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Api1Service } from 'src/app/core/services/api1.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DbService } from '../../core/services/db.service';
import { ObjEditComponent } from './obj-edit.component';
import { ObjDeleteComponent } from './obj-delete.component';
import { ObjNewComponent } from './obj-new.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  providers: [Api1Service],
  template: `<main class="w-full flex flex-col items-center gap-5">
      <div class="relative flex items-center max-w-md w-1/2 mt-5">
        {{ nomTabla().toUpperCase() }}:
        <input
          class="h-8 w-full rounded-md bg-gray-200 focus:border-yellow-400 rounded-t-md flex-1 appearance-none border border-gray-300 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500  focus:z-10 sm:text-sm ng-pristine ng-valid ng-touched"
          type="text"
          name="busqueda"
          id="busqueda"
        />
        <mat-icon class="absolute right-2 text-white">search</mat-icon>
      </div>
      <div class="flex w-11/12 max-h-md justify-center  p-2">
        <table class="border-black font-mono border-collapse">
          <thead>
            <tr class="uppercase bg-gray-600 text-white">
              <th class="py-2 px-4" *ngFor="let h of lista()[0] | keyvalue">
                {{ h.key }}
              </th>
              <th class="py-2 px-4">editar</th>
            </tr>
          </thead>
          <tbody>
            <tr
              *ngFor="let item of lista()"
              class="[&:nth-child(even)]:bg-gray-300"
            >
              <td *ngFor="let i of item | keyvalue" class="border px-4">
                {{ i.value }}
              </td>
              <td
                class="flex gap-x-4 px-4 py-2 justify-center text-white text-center"
              >
                <button
                  class="rounded-lg bg-orange-600 hover:bg-orange-500 p-2 h-10"
                  (click)="activarModal(2, item)"
                >
                  <mat-icon class="text-base">edit</mat-icon>
                </button>
                <button
                  class="rounded-lg bg-red-700 hover:bg-red-600 p-2 h-10"
                  (click)="activarModal(3, item)"
                >
                  <mat-icon class="text-base">delete</mat-icon>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="flex flex-col px-2 gap-y-2">
          <button
            class="p-2 h-10 bg-green-400 hover:bg-green-500 rounded-md"
            (click)="activarModal(1)"
          >
            <mat-icon>add</mat-icon>
          </button>
          <!-- <button
            class=" bg-slate-700 h-10 rounded-md p-2"
            (click)="reverseList()"
          >
            @if(state){
            <mat-icon>arrow_upward</mat-icon>
            }@else{
            <mat-icon>arrow_downward</mat-icon>
            }
          </button> -->
        </div>
      </div>
    </main>
    @switch(activateEdit) { @case (1) {<app-obj-new
      [nomTable]="this.nomTabla()"
      [objectId]="this.objectId"
      [campos]="campos()"
      (cerrar)="activateEdit = 0"
    />
    } @case (2) {<app-obj-edit
      [nomTable]="this.nomTabla()"
      [objectId]="this.objectId"
      [campos]="campos()"
      (cerrar)="activateEdit = 0"
    />
    } @case (3) {<app-obj-delete
      [nomTable]="this.nomTabla()"
      [objectId]="this.objectId"
      (cerrar)="activateEdit = 0"
    />
    } }`,
  imports: [
    RouterModule,
    CurrencyPipe,
    HttpClientModule,
    MatIconModule,
    CommonModule,
    ObjEditComponent,
    ObjDeleteComponent,
    ObjNewComponent,
  ],
})
export class TableComponent {
  constructor(
    private root: ActivatedRoute,
    private dbService: DbService,
    private apiService: Api1Service
  ) {}

  activateEdit = 0;
  objectId = '';
  state: boolean = false;

  lista = signal(<any[]>[]);
  nomTabla = signal('');
  campos = signal(<any[]>[]);

  async ngOnInit() {
    this.root.params.subscribe((params) => {
      this.nomTabla.set(params['nombre']);
    });
    this.get();
  }

  async get() {
    this.campos.set(await this.dbService.getColectionType(this.nomTabla()));
    this.lista.set(await this.apiService.getAll(this.nomTabla()));
  }
  activarModal(caso: number, item?: any) {
    this.activateEdit = caso;
    if (item != null) {
      this.objectId = item._id;
    }
  }
  // reverseList() {
  //   this.lista = this.arrProducts();
  //   if (this.state) {
  //     this.lista = this.arrProducts().slice().reverse();
  //   }
  //   this.state = !this.state;
  //   console.log('sube');
  // }
}
