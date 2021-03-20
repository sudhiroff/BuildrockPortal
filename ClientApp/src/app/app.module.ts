import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { ToDoListComponent } from './shared/to-do-list/to-do-list.component';
import { TestComponent } from './test/test.component';
import { AppMaterialModule } from './material-module';
import { WorkProgressComponent } from './work-progress/work-progress.component';
import { SharedModule } from './shared/shared.module';
import { LoaderComponent } from './shared/loader/loader.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    SideNavComponent,
    HeaderComponent,
    LayoutComponent,
    DashboardComponent,
    BreadcrumbComponent,
    FooterComponent,
    ToDoListComponent,
    WorkProgressComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    FlexLayoutModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [environment.baseUrl],
        sendAccessToken: true        
      }
    })
  ],
  providers: [OAuthService ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoaderComponent
  ]
})
export class AppModule { }
