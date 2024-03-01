import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  httpclient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api1/collections';

  getColectionsAll() {
    const names = firstValueFrom(this.httpclient.get<any[]>(this.baseUrl));
    return names
  }

  getColectionPropertys(nombre:String) {
    const propertys = firstValueFrom(this.httpclient.get<any[]>(`${this.baseUrl}/${nombre}`));
    return propertys
  }
  getColectionType(nombre:String) {
    return firstValueFrom(this.httpclient.get<any[]>(`${this.baseUrl}/types/${nombre}`));
  }
}

export interface Tablas{
  nombre: string,
  link: string
}
