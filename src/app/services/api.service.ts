/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://api.openweathermap.org/data/2.5/weather?lat=-22.59861&lon=-48.80028&lang=pt_br&appid=5c0208d063ec187d9c2a78a6920ac4f2&units=metric';

  constructor(private http: HttpClient) { }

  buscarPrevisao() {
    return this.http.get(this.url);
  }
}
