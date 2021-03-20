import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { AuthService } from '../authentication/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isProgressOpen: Boolean = false;
  public form = new FormGroup({
    EmailId: new FormControl('', [Validators.required, Validators.email]),
    Password: new FormControl('', Validators.required)
  });
  public error;

  ngOnInit(): void {
  }

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService,
    private loginService: LoginService, private oauthService: OAuthService) {

  }

  get email() {
    return this.form.get('EmailId');
  }

  public Login_Click() {
    if (this.form.valid) {
      this.isProgressOpen = true;
      this.loginService.UserLogin(this.form.value)
        .subscribe(result => {
          if (result['status'] === "success") {
            localStorage.setItem('buildrock', JSON.stringify(result['body']));
            sessionStorage.setItem('access_token', result['body']['token']);
            if (this.authService.isLoggedIn()) {
              this.router.navigateByUrl("/dashboard");
            }
          } else {
            this.error = result['msg'];
          }
          this.isProgressOpen = false;
        }, (err) => {
          this.isProgressOpen = false;
          this.error = err['message'];
        })
    }
  }
}
