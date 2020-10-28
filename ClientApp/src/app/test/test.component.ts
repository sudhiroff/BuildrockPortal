import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  button_click(){
    debugger
    let a= typeof null;
    let b= typeof undefined;
    let out=null===undefined;
    console.log(out);
  }

}
