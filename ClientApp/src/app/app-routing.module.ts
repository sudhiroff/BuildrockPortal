import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { WorkProgressComponent } from './work-progress/work-progress.component';


const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "", component: LayoutComponent,  children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "work-progress", component: WorkProgressComponent },
      { path: 'logistic', loadChildren: () => import('./logistic/logistic.module').then(m => m.LogisticModule) },
      { path: 'config', loadChildren: () => import('./config/config.module').then(m => m.ConfigModule) },
      { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
      { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
    ]
  },
  
  { path: "**", component: WorkProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
