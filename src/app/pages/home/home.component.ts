import { Component, OnInit } from '@angular/core';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ApiSenatiService } from '../../core/services/apiSenati.service';
import { HttpClientModule } from '@angular/common/http';
import { GaleryComponent } from 'src/app/shared/components/galery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [ApiSenatiService, NgbCarouselConfig],
  imports: [CommonModule, HttpClientModule, NgbCarouselModule, GaleryComponent],
  template: ` <div class="w-full flex flex-col items-center bg-gray-100">
    <main class="sm:w-3/4 min-w-[450px] bg-white p-5 pt-0">

      <ngb-carousel class="bg-gray-500">
        @for (img of images; track img) {
        <ng-template ngbSlide>
          <a
            href="{{ img.img }}"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <div class="picsum-img-wrapper h-[520px]">
              <img
                [src]="img.img"
                alt="{{ img.name }}"
                class="w-full h-full object-contain object-center block"
              />
            </div>
          </a>
          <div class="carousel-caption">
            <h3>{{ img.name }}</h3>
            <p>{{ img.desc }}</p>
          </div>
        </ng-template>
        }
      </ngb-carousel>
      <br>
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
export class HomeComponent implements OnInit {
  images: any[] = [
    {
      name: 'CAMA',
      img: 'assets/camas/cama1.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
    {
      name: 'MUEBLE',
      img: 'assets/muebles/mueble1.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
    {
      name: 'CENTRO DE ENTRETENIMIENTO',
      img: 'assets/entretenimiento/entretenimiento.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
    {
      name: 'LIBRERO',
      img: 'assets/libreros/librero1.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
    {
      name: 'ROPEROS',
      img: 'assets/roperos/ropero2.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
    {
      name: 'MUEBLE',
      img: 'assets/muebles/mueble3.jpeg',
      desc: 'Lorem input dolro wefw wd we fwe ',
    },
  ];

  constructor(public _config: NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.animation = true;
  }
  ngOnInit(): void {}
}
