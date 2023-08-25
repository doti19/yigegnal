import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import * as $ from 'jquery';

import {fakeBackendProvider} from '@shared/_helpers';
import {JwtInterceptor, ErrorInterceptor} from '@shared/_helpers';

import { AppComponent } from './app.component';
import { ContentWrapperComponent } from './shared/layout/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './shared/layout/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './shared/layout/main-footer/main-footer.component';
import { MainHeaderComponent } from './shared/layout/main-header/main-header.component';
import { MainSidebarComponent } from './shared/layout/main-sidebar/main-sidebar.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PlanRequestComponent } from './pages/plan-request/plan-request.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SearchComponent } from './pages/search/search.component';
import { AddFoundItemComponent } from './pages/add-found-item/add-found-item.component';
import { RegisterEnquiryComponent } from './pages/register-enquiry/register-enquiry.component';
import { PendingComponent } from './pages/pending/pending.component';
import { DeliveredComponent } from './pages/delivered/delivered.component';
import { ProfitAnalysisComponent } from './pages/profit-analysis/profit-analysis.component';
import { SupportComponent } from './pages/support/support.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';





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
    DashboardComponent,
    PlanComponent,
    PlanRequestComponent,
    LandingPageComponent,
    SettingComponent,
    SearchComponent,
    AddFoundItemComponent,
    RegisterEnquiryComponent,
    PendingComponent,
    DeliveredComponent,
    ProfitAnalysisComponent,
    SupportComponent,
    
    
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    StoreModule.forRoot({}),
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
    HeaderTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
