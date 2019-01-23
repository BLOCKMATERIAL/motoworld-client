import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/LoginService';
import {AuthenticationService} from '../../services/interceptors/AuthenticationService';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.styl'],
  providers: [LoginService, AuthenticationService]
})
export class AuthorizationComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    private loginService: LoginService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.username, this.password).subscribe(data => {
      this.authenticationService.writeUser(data.token, data._id);
    });
  }

}
