import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <div class="h-screen flex justify-center items-center ">
      <form
        [formGroup]="formLogin"
        (ngSubmit)="onSubmit()"
        class="flex flex-col h-3/4 w-96 max-w-md justify-center items-center gap-4 border-4 rounded-lg "
      >
        <input
          class="border rounded-lg h-10  text-center"
          type="text"
          placeholder="usuario"
          formControlName="user"
        />
        <input
          class="border rounded-lg h-10  text-center"
          type="password"
          placeholder="contraseña"
          formControlName="contra"
        />
        <button class="border rounded-lg p-2" type="submit">
          Iniciar Sesion
        </button>
        <div class="flex gap-5 items-center">
          <p>¿No tienes cuenta?</p>
          <a class="border rounded-xl p-2 bg-red-400" href="/register"
            >Registrate</a
          >
        </div>
      </form>
    </div>
  `,
  styleUrls: [],
  imports: [CommonModule, ReactiveFormsModule],
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
      { user: 'manito', contra: 'nosepe123' , rol:"user" },
    ];
    const userEncontrado = usuarios.find((u) => u.user === this.formLogin.get("user")?.value);
    if (userEncontrado?.contra === this.formLogin.get('contra')?.value) {
      if (userEncontrado?.rol === 'admin') {
        this.router.navigate(['dashboard']);
      } else {
        this.router.navigate(['']);
      } 
    } else {
      alert('contraseña incorrecta');
      alert(userEncontrado?.contra)
    }
  }
}
