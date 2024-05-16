import { FbSvgComponent } from '../../../assets/svg/fb-svg.component';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { WspSvgComponent } from 'src/assets/svg/wsp-svg.component';
@Component({
  selector: 'social-media',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FbSvgComponent, WspSvgComponent],
  template: ` <ul class="fixed z-50 right-5 top-20 flex flex-col  gap-2">
    <a href="https://www.facebook.com/profile.php?id=61554348636523"
      target="_blamk">
      <fb-svg/>
    </a>
    <a href=""
      target="_blank">
      <wsp-svg/>
    </a>
  </ul>`,
  styleUrls: [],
})
export class SocialMediaComponent {
  title = 'proyecta y diseña hogar';
}
