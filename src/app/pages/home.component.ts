import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiSenatiService } from '../core/services/apiSenati.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  providers:[ApiSenatiService],
  imports: [CommonModule,HttpClientModule],
  template:`<div class="">home works! vguoshfouasfnasuofhaus vfvhebuioawvuibgeuiaw</div>`,
})
export class HomeComponent {
  constructor(private service:ApiSenatiService){}

  async ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const e = await this.service.getAll()
    console.log(e)
  }
}
