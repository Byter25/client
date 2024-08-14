import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiSenatiService } from '../../core/services/apiSenati.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'contact',
  standalone: true,
  providers: [ApiSenatiService],
  imports: [CommonModule, HttpClientModule],
  styles: `input,textarea{
    @apply p-2 border-2 border-gray-300 min-w-80 rounded-md
  }
  input::placeholder,textarea::placeholder{
     @apply uppercase
  }
  textarea{
    @apply min-h-36 resize-y
  }`,

  template: ` <div class="w-full h-full mx-auto md:w-2/3 flex flex-col  items-center bg-white md:px-4">
    <form
      action="https://formsubmit.co/bryan25contacto@gmail.com"
      method="POST"
      class="flex flex-col p-4 w-full md:w-2/3 gap-5"
    >
      <input type="text" name="nombres"  placeholder="nombre completos" />
      <input type="email" name="email" placeholder="correo@gmail.com" />

      <input type="tel" name="telefono" placeholder="929929929" />
      <textarea name="asunto" placeholder="tu mensaje aqui..."></textarea>
      <button
        type="submit"
        class="font-bold text-white bg-orange-600 hover:bg-orange-500 transition-all duration-300 ease-in-out  w-32 px-4 py-2 rounded-md"
      >
        ENVIAR
      </button>
    </form>
  </div>`,
})
export class ContacComponent {}
