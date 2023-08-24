import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {fakeBackendProvider} from '@shared/_helpers';
import {JwtInterceptor, ErrorInterceptor} from '@shared/_helpers';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './shared/layout/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/layout/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/layout/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/layout/main-header/main-header.component';
import { MainSidebarComponent } from './shared/layout/main-sidebar/main-sidebar.component';
import { AlertComponent } from './shared/components/alert/alert.component';





@NgModule({
  declarations: [
    AppComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    // LoginComponent,
    AlertComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
