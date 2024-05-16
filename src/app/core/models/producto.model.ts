import { DecimalPipe } from "@angular/common";

export interface Producto {
  nombre: String;
  descripcion: String;
  precio: DecimalPipe;
  stock: Number;
  _id?: String;
  createdAt?: Date;
  updatedAt?: Date;
}
