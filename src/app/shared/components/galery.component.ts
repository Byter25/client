import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'galery',
  standalone: true,
  imports: [CommonModule],
  styles: `
  :root{
    --scala:0;
    --medida:0px;
  }
  img{
    width: 0px;
    flex-grow:1;
    object-fit: cover;
    filter:contrast(70%);
    transition: all .5s ease;
  }
  img:hover {
    z-index:10;
    cursor:crosshair;
    filter:contrast(120%);
    transform: scale(var(--escala));
    width: var(--medida);
  }

`,
  template: ` <section class="w-full hover:bg-yellow-400 transition-all duration-300 p-2 pt-0 rounded-md">
    <p class=" text-center text-2xl p-2  uppercase font-mono font-bold tracking-widest">{{ titulo }}</p>
    <div class="flex w-full h-72">
      <img *ngFor="let img of imagenes"
      [ngStyle]="{'--escala':escala,'--medida':medida + 'px'}"
      src="{{img}}"
      alt="{{titulo}}" loading="lazy" />
    </div>
  </section>`,
})
export class GaleryComponent{
  @Input() titulo: string = '';
  @Input() imagenes: String[] = [];
  @Input() medida: number = 0;
  @Input() escala: number = 0;
}
