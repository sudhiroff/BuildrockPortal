import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public progress: Boolean = false;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.subSpinner.subscribe(res => {
      this.progress = res;
    });
  }

}
