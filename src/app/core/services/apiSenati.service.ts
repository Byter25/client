import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiSenatiService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://apisenati25.azurewebsites.net/api/Alumno';


  getAll() {
    const a = firstValueFrom(this.http.get<any[]>(`${this.baseUrl}/Get`))
    return a;
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
}

