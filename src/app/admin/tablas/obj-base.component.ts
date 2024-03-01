import { Input, Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-mi-componente',
  template: '<p>Hola, soy un componente</p>'
})

export class ObjBaseComponnet {
  @Input() nomTable: string = "";
  @Input() objectId: string = "";
  @Output() public cerrar = new EventEmitter<boolean>(false);

  // Puedes añadir otros métodos o propiedades comunes aquí
}

