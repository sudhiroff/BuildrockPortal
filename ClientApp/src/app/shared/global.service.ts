import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseUrl="http://localhost:59075/api/";

  getUserList=this.baseUrl+"portallogins";

}
