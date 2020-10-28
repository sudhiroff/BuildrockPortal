import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { RolesComponent } from './roles/roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
    { path: 'user-list', component: UserListComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'update-user/:id', component: NewUserComponent },
    { path: 'profile/:id', component: NewUserComponent },
    { path: 'password/:id', component: ChangePasswordComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'new-role', component: NewRoleComponent },
    { path: 'new-role/:id', component: NewRoleComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConfigRoutingModule {
}