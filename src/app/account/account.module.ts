import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
// import { ContentWrapperComponent } from '../content-wrapper/content-wrapper.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LayoutComponent } from './layout/layout.component';
// import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule
    ],
    declarations: [
        // ContentWrapperComponent,
        LoginComponent,
        RegisterComponent,
        LayoutComponent,
        // RegisterComponent
    ]
})
export class AccountModule { }