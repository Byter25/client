import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiSenatiService } from '../../core/services/apiSenati.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  providers:[ApiSenatiService],
  imports: [CommonModule,HttpClientModule],
  styles:`
  form{
    margin:2rem;
    padding:2rem;
    border-radius:1rem;
    box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
  }
  form label{
    min-width: 100px;
    padding:5px;
  }
  form input, textarea{
    min-width:100px;
    width: 300px;
    border: 1px solid gray;
    padding:0.45rem;
    margin:0.5rem;
  }
textarea {
    resize:none;
    width:100%;
    height:100px;
  }
  `,
  template:`<div class="h-[95vh] w-full flex flex-col items-center bg-gray-100 flex-1" >
    <main class="md:w-3/4 min-w-[400px] bg-white flex justify-center items-center h-full">
      <form action="">
        <label for="">Nombres</label>
        <input type="text" placeholder="juan martin rodrigez palacios">
        <br>
        <label for="">Correo</label>
        <input type="email" placeholder="correo@gmail.com">
        <br>
        <label for="">Telefono</label>
        <input type="tel" placeholder="929929929">
        <br>
        <label for="">Asunto</label>
        <input type="text" placeholder="camprar">
        <br>
        <label for="">Mensaje</label>
        <br>
        <textarea placeholder="tu mensaje aqui..."></textarea>
        <br>
        <button type="submit" class="my-5 m-auto block bg-yellow-400 w-32 p-2 rounded-md">ENVIAR</button>
      </form>
    </main>
  </div>`,
})
export class ContacComponent {
}
