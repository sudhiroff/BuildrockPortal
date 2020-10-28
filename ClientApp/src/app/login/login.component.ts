import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { JsonpClientBackend } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Store, select } from "@ngrx/store";
// import { increment,decrement,reset } from "../store/actions/counter.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isProgressOpen: Boolean = false;
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  public error;

  ngOnInit(): void {
  }

  constructor(private router: Router, private fb: FormBuilder,
    private loginService: LoginService) {

  }

  get email() {
    return this.form.get('email');
  }

  public Login_Click() {
    if (this.form.valid) {
      this.isProgressOpen = true;
      this.loginService.UserLogin(this.form.value)
        .subscribe(result => {
          if (result['status'] === "success") {
            localStorage.setItem('user', JSON.stringify(result['user']));
            localStorage.setItem('isLoggedIn', "true");
            this.router.navigateByUrl("/dashboard");
          } else {
            this.error = result['msg'];
          }
          this.isProgressOpen = false;
        }, (err) => {
          this.isProgressOpen = false;
          this.error = err;
        })
    }
  }
}
