import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { nav } from 'src/app/shared/navbar.data';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  public rolesList: Array<any>;
  public navList = nav;
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.breadcrumbTitle = "User Roles";
    this.sharedService.GetRoles()
      .subscribe(result => {
        if (result['status'] == 'success') {
          this.rolesList = result["data"];
          let moduleName = [];
          this.rolesList.map((item, i) => {
            let moduleName = [];
            item['access'].map(x => {
              let obj = this.navList.find(o => o.id == x);
              if (obj) {
                moduleName.push(obj.title);
              }
            })
            item['moduleName'] = moduleName.join(', ').toString();
          })
        }
      })
  }

  public New_Click() {
    this.router.navigateByUrl('/config/new-role');
  }

  public Edit_Click(id: String) {
    this.router.navigateByUrl('/config/new-role/' + id);
  }

}
