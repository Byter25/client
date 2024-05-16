import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Cliente } from '../models/cliente.model';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class Api1Service {
  constructor(private http: HttpClient) {}
  baseUrl = 'http://localhost:3000/api1';

  getAll(nomTable: String) {
    return firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/${nomTable}`))
  }

  getById(nomTable: String, objectId: String) {
    return firstValueFrom(
      this.http.get<any>(`${this.baseUrl}/${nomTable}/${objectId}`)
    );
  }

  create(nomTable: String, formValues: any) {
    return firstValueFrom(
      this.http.post<any>(`${this.baseUrl}/${nomTable}`, formValues)
    );
  }

  update(nomTable: String, objectId: String, formValues: any) {
    return firstValueFrom(
      this.http.put(`${this.baseUrl}/${nomTable}/${objectId}`, formValues)
    );
  }
  delete(nomTable: String, objectId: String) {
    return this.http.delete(`${this.baseUrl}/${nomTable}/${objectId}`);
  }
}
