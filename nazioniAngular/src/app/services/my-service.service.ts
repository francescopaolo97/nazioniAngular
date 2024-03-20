import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  private listaNazioni!: any[];

  constructor(private http: HttpClient) {}

  getNazioni(): Observable<any> {
    return this.http.get<any>(
      'https://countriesnow.space/api/v0.1/countries/flag/images'
    );
  }
}
