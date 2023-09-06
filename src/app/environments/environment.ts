import { HttpHeaders } from "@angular/common/http";

export const environment = {
    production: false,
    apiUrl: 'http://192.168.8.139:3000/v1',
  headers: new HttpHeaders().set('Content-Type', 'application/json'),

};