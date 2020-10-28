import { Component, OnInit, OnDestroy } from '@angular/core';
import { nav } from 'src/app/shared/navbar.data';
import { SharedService } from 'src/app/shared/shared.service';
import { Validators, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { resultType } from 'src/app/shared/types/sub.result';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit, OnDestroy {
  public navItem = nav;
  public pageTitle: String = "New Role";
  public isUpdate: Boolean = false;
  public updatedId;
  public error: any;
  public successMsg: any;
  menuCtrls = new FormArray([]);
  roleName = new FormControl('', Validators.required);

  private routeSub: Subscription;
  constructor(private sharedService: SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addCheckboxes();
    this.routeSub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.updatedId = params['id'];
        this.sharedService.GetRole(params['id'])
          .subscribe(result => {
            if (result['status'] == 'success') {
              let role: object = result['data'][0];
              this.pageTitle = "Update Role";
              this.isUpdate = true;
              this.roleName.setValue(role['roleName']);
              role['access'].map(o => {
                this.menuCtrls.controls[o - 1].setValue(true);
              })
            }
          })
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  private addCheckboxes() {
    this.navItem.forEach(() => {
      this.menuCtrls.push(new FormControl(false));
    });
  }
  public Submit_Click() {
    let body = {
      'roleName': this.roleName.value,
      'access': this.getSelectedId()
    }
    if (this.roleName.valid) {
      this.sharedService.CreateNewRole(body)
        .subscribe((result: resultType) => {
          if (result.status == 'success') {
            this.successMsg = "role updated successfully."
          } else {
            this.error = result['msg']
          }
        });
    } else {
      this.roleName.markAsTouched();
    }
  }

  public Update_Click(id?: String) {
    let body = {
      'roleName': this.roleName.value,
      'access': this.getSelectedId()
    }
    if (this.roleName.valid) {
      this.sharedService.UpdateRole(id, body)
        .subscribe((result: resultType) => {
          if (result.status == 'success') {
            this.successMsg = "role updated successfully."
          } else {
            this.error = result['msg']
          }
        });
    } else {
      this.roleName.markAsTouched();
    }
  }

  private getSelectedId() {
    const selectedOrderIds = this.menuCtrls.value
      .map((v, i) => (v ? this.navItem[i].id : null))
      .filter(v => v !== null);
    return selectedOrderIds;
  }
}
