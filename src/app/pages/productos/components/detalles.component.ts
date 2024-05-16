import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Api1Service } from 'src/app/core/services/api1.service';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ObjBaseComponnet } from '../../../admin/tablas/components/obj-base.component';
@Component({
  selector: 'detalles',
  imports: [CurrencyPipe, MatIconModule, RouterLink],
  template: `<main
    class="fixed flex justify-center items-center top-0 z-10 w-full h-full bg-gray-600/50 backdrop-blur-sm transition-colors duration-200 before:bg-none"
  >
    <div class="max-w-md w-96 px-4 py-2 bg-slate-50 text-right rounded-md shadow-md shadow-black/50">
    <button (click)="cerrar.emit(false)">
        <mat-icon>close</mat-icon>
      </button>
      <!-- <img src="" alt="img" class="h-10"> -->
      <div class="bg-gray-600 h-72 w-full"></div>
      <div class="py-2 text-left">
      </div>
    </div>
  </main>`,
  standalone: true,
})
export class DetallesComponent extends ObjBaseComponnet{
  constructor(private route:ActivatedRoute,private api:Api1Service){
    super()
  }
  product = signal<any>({});

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      const product = await this.api.getById(this.nomTable,params['productId']);
      console.log(product)
      this.product.set(product);
    });
  }
}
