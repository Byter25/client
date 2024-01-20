import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="h-screen flex justify-center items-center ">
      <form
        [formGroup]="formRegister"
        (ngSubmit)="onSubmit()"
        class="flex flex-col h-3/4 w-3/5 max-w-md justify-center items-center border-4 rounded-lg gap-5"
      >
        <div class="flex flex-col gap-4 justify-center">
          <div>
            <input
              class="border rounded-lg h-10 1/2 text-center"
              type="text"
              placeholder="nombre"
              formControlName="nombre"
            />
            <input
              class="border rounded-lg h-10 1/2 text-center"
              type="text"
              placeholder="apellido"
              formControlName="apellido"
            />
          </div>
          <input
            class="border rounded-lg h-10 w-full text-center"
            type="text"
            placeholder="usuario"
            formControlName="usuario"
          />
          <input
            class="border rounded-lg h-10 text-center"
            type="email"
            placeholder="ejemplo@gmail.com"
            formControlName="email"
          />
          <div>
            <input
              class="border rounded-lg h-10 w-1/2 text-center"
              type="password"
              placeholder="contraseña"
              formControlName="contra"
            />
            <input
              class="border rounded-lg h-10 w-1/2 text-center"
              type="password"
              placeholder="repite contraseña"
              formControlName="repContra"
            />
          </div>
        </div>
        <button class="border rounded-lg p-2" type="submit">Registrarse</button>
        <div class="flex gap-5 items-center">
          <p>¿Ya tienes cuenta?</p>
          <a class="border rounded-xl p-2 bg-red-400" href="/login"
            >Inicia Sesion</a
          >
        </div>
      </form>
    </div>
  `,
  styles: [],
})
export class RegisterComponent {
  formRegister = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    user: new FormControl(),
    email: new FormControl(),
    contra: new FormControl(),
    repContra: new FormControl(),
  });

  onSubmit() {
    console.log(this.formRegister.get('nombre')?.value);
  }
}
