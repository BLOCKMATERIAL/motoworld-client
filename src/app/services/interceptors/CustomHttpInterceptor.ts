import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpResponse} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http';
import {HttpHandler} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './AuthenticationService';
import {map} from 'rxjs/operators';


@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private _authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this._authenticationService.user;

    if (user) {
      console.log(user);
      request = request.clone({ headers: request.headers.set('Authorization', user.header) });
    }

    console.log(request.headers);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }));
  }
}
