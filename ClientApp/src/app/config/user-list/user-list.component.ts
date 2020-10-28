import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { result } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public Users: Array<any>;
  public Roles: Array<any>;
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.breadcrumbTitle = "User List";
    this.loadUsers();
  }

  public loadUsers() {
    this.sharedService.GetUserList()
      .subscribe(result => {
        if (result[0]['status'] == 'success' && result[1]['status'] == 'success') {
          this.Users = result[0]['data'];
          this.Roles = result[1]['data'];
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
