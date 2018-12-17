import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {
  private url: string = "../assets/data.json";
  constructor(private http: HttpClient) { }

  public get data(): Observable<any> {
    return this.http.get(this.url);
  }
}
