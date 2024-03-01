import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  template: `
    <!-- login.html -->
    <main
      class="absolute top-0 w-full h-full flex items-center justify-center bg-gray-50"
    >
      <form
        [formGroup]="formLogin"
        (ngSubmit)="onSubmit()"
        class="max-w-md w-full space-y-8"
      >
        <div class="rounded-md shadow-sm -space-y-px">
          <input
            type="text"
            formControlName="user"
            placeholder="Usuario"
            class="rounded-t-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
          <input
            type="password"
            formControlName="contra"
            placeholder="Contraseña"
            class="rounded-b-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 capitalize"
          >
            Iniciar sesión
          </button>
        </div>
        <div class="flex items-center justify-between">
          <p>¿No tienes cuenta?</p>
          <a
            class="font-medium text-indigo-600 hover:text-indigo-500 capitalize"
            routerLink="/register"
            >Regístrate</a
          >
        </div>
      </form>
    </main>
  `,
})
export class LoginComponent {
  constructor(private router: Router) {}

  formLogin = new FormGroup({
    user: new FormControl(),
    contra: new FormControl(),
  });

  onSubmit() {
    let usuarios = [
      { user: 'admin', contra: 'admin', rol: 'admin' },
      { user: 'bryan123', contra: 'bryanalex', rol: 'user' },
      { user: 'manito', contra: 'nosepe123', rol: 'user' },
    ];
    const userEncontrado = usuarios.find(
      (u) => u.user === this.formLogin.get('user')?.value
    );
    if (userEncontrado?.contra === this.formLogin.get('contra')?.value) {
      switch (userEncontrado?.rol) {
        case 'admin':
          this.router.navigate(['dashboard']);
          break;
        case 'user':
          this.router.navigate(['']);
          break;
        default:
          alert('Rol desconocido');
      }
    } else {
      alert('contraseña incorrecta');
      alert(userEncontrado?.contra);
    }
  }
}
