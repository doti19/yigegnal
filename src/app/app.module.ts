import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './shared/components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';

import { MatTableModule } from '@angular/material/table';
import { AuthInterceptor } from './shared/helpers/authconfig.interceptor';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AdminModule } from './admin/admin.module';
import { DbAnalysistModule } from './db-analysist/db-analysist.module';
import { DeliveryModule } from './delivery/delivery.module';
// import { LayoutComponent } from './account/layout/layout.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import { CatagoryComponent } from './pages/catagory/catagory.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    SuperAdminModule,
    AdminModule,
    DbAnalysistModule,
    DeliveryModule,

    MatFormFieldModule,
    MatCardModule, 
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    SignupComponent,
  
 

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
