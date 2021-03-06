import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  public VendorList:Array<any>=[];
  constructor(private sharedSvc:SharedService,private salesSvc:SalesService) { }

  ngOnInit() {
   // this.sharedSvc.IsProgress(true);
    this.salesSvc.Vendors()
      .subscribe((res: any) => {
      //  this.sharedSvc.IsProgress(false);
        this.VendorList = res;
      }, (ex) => {
     //   this.sharedSvc.IsProgress(false);
      })
  }

}
