import { NgModule } from '@angular/core';

import { ConfigRoutingModule } from './config-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { AppMaterialModule } from '../material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { RolesComponent } from './roles/roles.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
    declarations: [UserListComponent, NewUserComponent, RolesComponent, NewRoleComponent, ChangePasswordComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AppMaterialModule,
        ConfigRoutingModule
    ]
})
export class ConfigModule { }