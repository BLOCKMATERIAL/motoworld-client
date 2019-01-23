import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private static url = "http://motoworld.me/api/users/login";
  constructor(private http: HttpClient) {
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(LoginService.url, { username: username, password: password });
  }

}
