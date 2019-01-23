import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private static USER = 'user';
  private _sessionStorage: Storage;

  constructor() {
    this._sessionStorage = sessionStorage;
  }

  public writeUser(header: string, userId: string) {
    const user = {header: header, userId: userId};
    this._sessionStorage.setItem(AuthenticationService.USER, JSON.stringify(user));
  }

  public get user() {
    return JSON.parse(this._sessionStorage.getItem(AuthenticationService.USER));
  }
}
