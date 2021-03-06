import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public ItemList: Array<any> = [];
  constructor(private sharedSvc: SharedService) { }

  ngOnInit() {
    // this.sharedSvc.IsProgress(true);
    this.sharedSvc.Items()
      .subscribe((res: any) => {
        this.ItemList = res;
      }, (ex) => {
      })
  }
}
