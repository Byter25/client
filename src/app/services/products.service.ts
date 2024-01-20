import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpclient = inject(HttpClient);
  baseUrl = 'http://localhost:3000/api1';

  getAll() {
    return firstValueFrom(this.httpclient.get<any[]>(this.baseUrl));
  }

  getById(producttId: String) {
    return firstValueFrom(
      this.httpclient.get<any>(`${this.baseUrl}/${producttId}`)
    );
  }

  create(formValues: any) {
    return firstValueFrom(this.httpclient.post<any>(this.baseUrl, formValues));
  }

  update(productId: String, formValues: any) {
    return firstValueFrom(
      this.httpclient.put(`${this.baseUrl}/${productId}`, formValues)
    );
  }
  delete(value: any) {}
}

interface Product {
  _id: String;
  nombre: String;
  descripicion: String;
  precio: number;
  __v: String;
}
