import { Component } from '@angular/core';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loader=LoaderComponent;
  title = 'AppNine';
}
