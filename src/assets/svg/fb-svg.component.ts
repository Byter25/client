import { Component } from '@angular/core';

@Component({
  selector: 'fb-svg',
  standalone: true,
  imports: [],
  styles: `
  .fil2 {fill:#30487C}
  .fil0 {fill:#3B5999}
  .fil1 {fill:white}
  `,
  template: `<svg
  height="40px"
  width="40px"
  style="
    shape-rendering: geometricPrecision;
    text-rendering: geometricPrecision;
    image-rendering: optimizeQuality;
    fill-rule: evenodd;
    clip-rule: evenodd;
  "
  version="1.1"
  viewBox="0 0 258 258"
  xml:space="preserve"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <g id="Layer_x0020_1">
    <g id="_444233528">
      <rect class="fil0" height="258" rx="28" ry="28" width="258" />
      <path
        class="fil1"
        d="M84 106l27 0 0 -5c0,-8 -1,-18 0,-26 1,-19 11,-31 37,-32l26 1 0 28c-11,0 -30,-4 -32,10l0 24 30 0 -3 31 -27 0 0 78 -31 0 0 -78 -27 -1 0 -30z"
      />
      <path
        class="fil2"
        d="M258 128l-84 -84 0 28c-11,0 -30,-4 -32,10l0 24 30 0 -3 31 -27 0 0 78 -31 0 43 43 76 0 28 -28 0 -102z"
      />
    </g>
  </g>
</svg>`
})
export class FbSvgComponent {
}
