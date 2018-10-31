import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = '../../data.json';
  constructor(private _http: Http) {}
  getPost() {
    return this._http.get(this.url);
  }
}
