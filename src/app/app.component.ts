import { Component } from '@angular/core';
import { NavegacionComponent } from './components/navegacion.component';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [],
    standalone: true,
    imports: [RouterOutlet, NavegacionComponent],
})
export class AppComponent {
  title = 'client';
}
