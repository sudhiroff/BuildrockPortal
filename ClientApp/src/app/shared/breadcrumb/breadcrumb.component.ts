import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './breadcrumb.service'
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public _breadcrumbData: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.subBreadcrumb
      .subscribe(result => {
        this._breadcrumbData = result;
      })
  }

}
