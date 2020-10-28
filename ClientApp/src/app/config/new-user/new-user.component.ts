import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SharedService } from 'src/app/shared/shared.service';
import { result } from 'lodash';
import { resultType } from 'src/app/shared/types/sub.result';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  public form: FormGroup;
  public error: any;
  public successMsg: any;
  public pageTitle: String = "";
  public roleList: Array<any>;
  public updatedId: String;
  public btnTitle: String = "Save";
  private routeSub: Subscription;

  constructor(private fb: FormBuilder, private sharedService: SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sharedService.breadcrumbTitle = "New User";
    this.prepareForm();
    this.sharedService.GetRoles()
      .subscribe((result: resultType) => {
        if (result.status == 'success') {
          this.roleList = result.data;
        }
      });
    this.routeSub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.sharedService.breadcrumbTitle = "Update User";
        this.btnTitle = "Update";
        this.updatedId = params['id'];
        this.getUserDetail();
      }
    });
  }
  getUserDetail() {
    this.sharedService.GetUser(this.updatedId)
      .subscribe((result: resultType) => {
        if (result.status == 'success') {
          let objUser = result.data;
          this.firstName.setValue(objUser['firstName']);
          this.lastName.setValue(objUser['lastName']);
          this.email.setValue(objUser['email']);
          this.password.setValue(objUser['password']);
          this.mobileNo.setValue(objUser['mobileNo']);
          this.role.setValue(objUser['role']);

          this.email.disable();
          this.password.disable();
        }
      });
  }

  get firstName() {
    return this.form.get('firstName');
  }
  get lastName() {
    return this.form.get('lastName');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get mobileNo() {
    return this.form.get('mobileNo');
  }

  get role() {
    return this.form.get('role');
  }

  public prepareForm() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      mobileNo: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  public Register_Click() {
    this.error = "";
    if (this.form.valid) {
      this.form.value['confirmPassword'] = this.password.value;
      if (this.updatedId) {
        this.updateUser();
      } else {
        this.sharedService.Signup(this.form.value)
          .subscribe(result => {
            if (result['status'] == 'success') {

            } else {
              this.error = result['msg']
            }
          })
      }
    }
  }
  updateUser() {
    this.sharedService.UpdateUser(this.updatedId, this.form.value)
      .subscribe((result: resultType) => {
        if (result.status == 'success') {
          this.successMsg = "user updated successfully."
        } else {
          this.error = result['msg']
        }
      })
  }

}
