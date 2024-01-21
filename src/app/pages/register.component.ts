import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <main
      class="absolute h-full w-full z-0 top-0 flex justify-center items-center"
    >
      <form
        class="relative max-w-md text-center grid grid-cols-2 grid-rows-9 w-1/2 p-0 m-0 gap-x-5"
        [formGroup]="formRegister"
        (ngSubmit)="onSubmit()"
      >
        <!-- ENTRADA NOMBRE -->
        <input
          type="text"
          placeholder="Nombre"
          formControlName="nombre"
          [ngClass]="{
            'border-red-500':
              formRegister.get('nombre')?.invalid &&
              formRegister.get('nombre')?.touched
          }"
          class="row-start-1 form-input border rounded-lg text-center"
        />
        @if(formRegister.get('nombre')?.invalid &&
        formRegister.get('nombre')?.touched){
        <span class=" text-red-500 text-xs italic"
          >El nombre es requerido
        </span>
        } "
        <!-- ENTRADA APELLIDOS -->
        <input
          class="row-start-1 col-start-2 form-input border rounded-lg h-10 text-center"
          type="text"
          placeholder="Apellido"
          formControlName="apellido"
          [ngClass]="{
            'border-red-500':
              formRegister.get('apellido')?.invalid &&
              formRegister.get('apellido')?.touched
          }"
        />
        @if(formRegister.get('apellido')?.invalid &&
        formRegister.get('apellido')?.touched){
        <span class="row-start-2 col-start-2 text-red-500 text-xs italic">
          El apellido es requerido
        </span>
        }
        <!-- ENTRADA USUARIO -->
        <input
          class="row-start-3 form-input col-span-2 border rounded-lg h-10 w-full text-center"
          type="text"
          placeholder="Usuario"
          formControlName="usuario"
          [ngClass]="{
            'border-red-500':
              formRegister.get('usuario')?.invalid &&
              formRegister.get('usuario')?.touched
          }"

        />
        @if( formRegister.get('usuario')?.invalid &&
        formRegister.get('usuario')?.touched){
        <span
          class="row-start-4 col-start-1 col-end-2 text-red-500 text-xs italic"
        >
          El usuario es requerido
        </span>
        }
        <!-- ENTRADA EMAIL -->
        <input
          class="form-input row-start-5 col-span-2 border rounded-lg h-10 text-center"
          type="email"
          placeholder="ejemplo@gmail.com"
          formControlName="email"
          [ngClass]="{
            'border-red-500':
              formRegister.get('email')?.invalid &&
              formRegister.get('email')?.touched
          }"
        />
        <span
          class="row-start-6 col-span-2 text-red-500 text-xs italic"
          *ngIf="
            formRegister.get('email')?.invalid &&
            formRegister.get('email')?.touched
          "
        >
          <!-- Usar la directiva ngIf para mostrar el mensaje de error si el campo es inválido y ha sido tocado -->
          El email es requerido y debe tener un formato válido
        </span>
        <!-- ENTRADA CONTRASEÑA -->
        <input
          type="password"
          placeholder="Contraseña"
          formControlName="contra"
          [ngClass]="{
            'border-red-500':
              formRegister.get('contra')?.invalid &&
              formRegister.get('contra')?.touched
          }"
          class="form-input row-start-7 border rounded-lg h-10 text-center"
        />
        <span
          *ngIf="
            formRegister.get('contra')?.invalid &&
            formRegister.get('contra')?.touched
          "
          class="row-start-8 text-red-500 text-xs italic"
        >
          <!-- Usar la directiva ngIf para mostrar el mensaje de error si el input es inválido y ha sido tocado -->
          La contraseña es requerida
        </span>
        <!-- CONFIRMA CONTRASEÑA -->
        <input
          type="password"
          placeholder="Repite Contraseña"
          formControlName="repContra"
          [ngClass]="{
            'border-red-500':
              formRegister.get('repContra')?.invalid &&
              formRegister.get('repContra')?.touched
          }"
          class="form-input row-start-7 col-start-2 border rounded-lg h-10 text-center"
        />
        <span
          *ngIf="
            formRegister.get('repContra')?.invalid &&
            formRegister.get('repContra')?.touched
          "
          class="row-start-8 col-start-2 text-red-500 text-xs italic"
        >
          <!-- Usar la directiva ngIf para mostrar el mensaje de error si el input es inválido y ha sido tocado -->
          La confirmación de la contraseña es requerida y debe ser igual a la
          contraseña
        </span>
        <button
          class="row-start-9 col-span-2 rounded-md text-sm font-medium text-white bg-red-600 capitalize"
          type="submit"
        >
          registrar
        </button>
      </form>
    </main>
  `,
  styles: [],
})
export class RegisterComponent {
  matchPassword: ValidatorFn = (control: AbstractControl) => {
    // Hacer un casting al tipo FormGroup
    const formGroup = control as FormGroup;
    const password = formGroup.get('contra')?.value;
    const confirmPassword = formGroup.get('repContra')?.value;

    if (password !== confirmPassword) {
      formGroup.get('repContra')?.setErrors({ matchPassword: true });
      return { matchPassword: true };
    } else {
      formGroup.get('repContra')?.setErrors(null);
      return null;
    }
  };

  formRegister = new FormGroup(
    {
      nombre: new FormControl('', Validators.required), // Agregar validación de requerido
      apellido: new FormControl('', Validators.required), // Agregar validación de requerido
      usuario: new FormControl('', Validators.required), // Agregar validación de requerido
      email: new FormControl('', [Validators.required, Validators.email]), // Agregar validación de requerido y de email
      contra: new FormControl('', Validators.required), // Agregar validación de requerido
      repContra: new FormControl('', Validators.required), // Agregar validación de requerido
    },
    { validators: this.matchPassword }
  );

  onSubmit() {
    console.log(this.formRegister.get('nombre')?.value);
  }
}
