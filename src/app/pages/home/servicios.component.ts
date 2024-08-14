import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GaleryComponent } from 'src/app/shared/components/galery.component';

@Component({
  selector: 'services',
  standalone: true,
  imports: [CommonModule, GaleryComponent],
  template: ` <div class="w-full bg-gray-100">
    <main class="md:w-3/4 mx-auto bg-white p-4 flex flex-col gap-2 pb-10">
      <galery
        [titulo]="'Muebles'"
        [medida]="300"
        [escala]="1.1"
        [imagenes]="[
          '../../../assets/muebles/mueble1.jpeg',
          '../../../assets/muebles/mueble2.jpeg',
          '../../../assets/muebles/mueble3.jpeg',
          '../../../assets/muebles/mueble4.jpeg',
          '../../../assets/muebles/mueble5.jpeg'
        ]"
      />
      <galery
        titulo="Camas"
        [medida]="200"
        [escala]="1.1"
        [imagenes]="[
          '../../../assets/camas/cama1.jpeg',
          '../../../assets/camas/cama2.jpeg',
          '../../../assets/camas/cama3.jpeg',
          '../../../assets/camas/cama4.jpeg',
          '../../../assets/camas/cama5.jpeg'
        ]"
      />
      <galery
        titulo="Roperos"
        [medida]="200"
        [escala]="1.2"
        [imagenes]="[
          '../../../assets/roperos/ropero.jpeg',
          '../../../assets/roperos/ropero1.jpeg',
          '../../../assets/roperos/ropero2.jpeg',
          '../../../assets/roperos/ropero3.jpeg',
          '../../../assets/roperos/ropero4.jpeg'
        ]"
      />
      <galery
        titulo="Centro de Entretenimiento"
        [medida]="200"
        [escala]="1.2"
        [imagenes]="[
          '../../../assets/entretenimiento/entretenimiento.jpeg',
          '../../../assets/entretenimiento/entretenimiento2.jpeg',
          '../../../assets/entretenimiento/entretenimiento1.jpeg'
        ]"
      />
      <galery
        titulo="Reposteros"
        [medida]="200"
        [escala]="1.2"
        [imagenes]="[
          '../../../assets/camas/cama1.jpeg',
          '../../../assets/camas/cama2.jpeg',
          '../../../assets/camas/cama3.jpeg',
          '../../../assets/camas/cama4.jpeg',
          '../../../assets/camas/cama5.jpeg'
        ]"
      />
    </main>
  </div>`,
})
export class ServiciosComponent {}
