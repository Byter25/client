import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Tablas } from '../../core/services/db.service';
@Component({
  selector: 'option-desplegable',
  standalone: true,
  imports: [MatIconModule,RouterLink, CommonModule],
  template: `
    <li class="relative">
      <div (click)="state = !state"  class="relative hover:text-white hover:shadow-white p-1 h-8 rounded-l-md text-white/60"
      [ngClass]="{'bg-slate-700 text-white': state}">
        <mat-icon fontIcon="{{ MatIcon }}"/>
      </div>
      @if(state){
        <ul class="absolute bg-gray-700 top-0 left-full rounded-md rounded-tl-none">
          @for(nom of nombres; track nom){
          <li [routerLink]="['./tabla',nom]" class="py-2 px-4 hover:text-white hover:bg-slate-600">{{nom}}</li>
          }
        </ul>
        }
    </li>

  `,
})
export class OptionDesplegableComponent {
  state: boolean = false;
  @Input() nombres:string[] = [];
  @Input() MatIcon:string = 'default';
}
