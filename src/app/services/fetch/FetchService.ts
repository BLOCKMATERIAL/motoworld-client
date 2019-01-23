import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class FetchService {


  constructor(private _http: HttpClient) {}

  fetch(url) {
    return this._http.get<any>(url);
  }

}
