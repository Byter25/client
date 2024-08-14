import { Component } from '@angular/core';
import { NavegacionComponent } from './shared/components/navegacion/navegacion.component';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent } from './shared/components/social-media.component';
import { FooterComponent } from './shared/components/footer.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [],
    standalone: true,
    imports: [RouterOutlet, NavegacionComponent, SocialMediaComponent, FooterComponent],
})
export class AppComponent {
  title = 'client';
}
