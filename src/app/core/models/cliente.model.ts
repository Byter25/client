import { DecimalPipe } from "@angular/common";

export interface Cliente {
  nombre: String;
  descripcion: String;
  precio: DecimalPipe;
  stock: Number;
  _id?: String;
  createdAt?: Date;
  updatedAt?: Date;
}
