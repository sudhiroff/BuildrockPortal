import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { result } from 'lodash';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public Users: Array<any>;
  public Roles: Array<any>;
  constructor(private router: Router, private sharedService: SharedService,private _glb:GlobalService) { }

  ngOnInit(): void {
    this.sharedService.breadcrumbTitle = "User List";
    this.loadUsers();
  }

  public loadUsers() {
    this.sharedService.getApi(this._glb.getUserList)
      .subscribe(result => {
        debugger;
        if (result['status'] == 'success') {
          this.Users = result['data'];
        }
      })
  }

  public Edit_Click(id: String) {
    this.router.navigateByUrl('/config/update-user/' + id);
  }

  public New_Click() {
    this.router.navigateByUrl('/config/new-user');
  }

  public getRoleName(roleId: String) {
    let obj = this.Roles.find((item) => item['_id'] == roleId)
    if (obj) {
      return obj['roleName'];
    } else {
      'NA'
    }
  }

}
