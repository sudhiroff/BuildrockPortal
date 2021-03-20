import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ReplaySubject } from 'rxjs';
import { User } from '../model-dto/User';
import { authCodeFlowConfig } from './oauth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isDoneLoadingSubject = new ReplaySubject<boolean>();
  public isDoneLoading = this.isDoneLoadingSubject.asObservable();

  constructor(private oAuthService:OAuthService) {
     this.configure();
  }
  configure() {
    this.oAuthService.initCodeFlow();
    this.oAuthService.initLoginFlow();
    this.oAuthService.configure(authCodeFlowConfig);
    this.oAuthService.setStorage(sessionStorage);
    //this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    //this.oAuthService.setupAutomaticSilentRefresh({},'access_token');
    
  }

  get userInfo(): User {
    const usr: User = new User();
    usr.Name = this.getClaimValue('Name');
    usr.Id = this.getClaimValue('Id');
    usr.Email = this.getClaimValue('Email');
    return usr;
  }

  logout():void{
    this.oAuthService.logOut();
  }

  // loggedIn(targetUrl?:string){
  //   const url = targetUrl || document.location.hash;
  //   this.oAuthService.tryLoginCodeFlow()
  //   .then(()=>{
  //     return this.oAuthService.hasValidAccessToken();
  //   })
  //   // .then(()=>{this.isDoneLoadingSubject.next(true)})
  //   // .catch(()=>{this.isDoneLoadingSubject.next(true)});
  // }

  isLoggedIn():boolean{
    let a=this.oAuthService.hasValidIdToken();
    const _islogin=this.oAuthService.hasValidAccessToken();
    return _islogin;
  }

  private getClaimValue(key:string){
    //const claim=this.oAuthService.getIdentityClaims();
    const claim=JSON.parse(window.localStorage.getItem('buildrock'));
    if(!claim){
      return null;
    }
    return claim[key];
  }

}
