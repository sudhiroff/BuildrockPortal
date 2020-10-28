import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.sharedService.breadcrumbTitle = "Customers";
  }

}
