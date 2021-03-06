import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  public UserLogin(body: object): Observable<any> {
    let url=this.baseUrl+environment.api.login;
    return this.http.post(url, body);
  }

  get baseUrl(){
    return environment.baseUrl;
  }

}
