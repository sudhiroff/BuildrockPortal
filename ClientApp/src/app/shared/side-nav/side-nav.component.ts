import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { nav } from '../navbar.data';
import { SharedService } from '../shared.service';
import { resultType } from '../types/sub.result';
declare var $: any;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public navbarItems = nav;
  public appNav: Array<any> = [];
  public fullName;
  constructor(private authService: AuthService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.fullName = this.authService.fullName;
    let roleId = this.authService.role;
    // this.sharedService.GetRole(roleId)
    //   .subscribe((result: resultType) => {
    //     if (result.status == "success") {
    //       let roles = result.data[0]['access'];
    //       roles.map((item, i) => {
    //         let obj = this.navbarItems.find(o => o.id == item);
    //         if (obj) {
    //           this.appNav.push(obj);
    //         }
    //       });
    //     }
    //   })
    this.appNav=nav;
  }

  public menuClick(id, event) {
    $('.parent-li').each(function () {
      if ($(this).attr('id') != id + "nav") {
        $(this).removeClass('menu-open');
      }
    });
    $("#" + id + "nav").toggleClass("menu-open");
  }
}
