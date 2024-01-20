import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [],
    standalone: true,
    imports: [NavegacionComponent, RouterOutlet],
})
export class AppComponent {
  title = 'client';
}
