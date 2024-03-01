import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'option-desplegable',
  imports: [ReactiveFormsModule],
  template: `
    <input
      type="{{tipo}}"
      placeholder="{{textoFalso}}"
      formControlName="{{nombreControl}}"
      class="col-start-2"
    />
  `,
  standalone: true,
})
export class OptionDesplegableComponent {
  state: boolean = false;
  @Input() tipo:string = ''
  @Input() textoFalso:string = ''
  @Input() nombreControl:string = ''
}
