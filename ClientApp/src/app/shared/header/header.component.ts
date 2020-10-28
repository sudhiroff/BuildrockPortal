import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userId: String = "";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userId = this.authService.loggedInUserId;
  }

}