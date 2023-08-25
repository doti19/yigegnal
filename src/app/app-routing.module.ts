import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './shared/layout/content-wrapper/content-wrapper.component';

import { AuthGuard } from '@shared/_helpers';
import { MainFooterComponent } from '@shared/layout/main-footer/main-footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PlanRequestComponent } from './pages/plan-request/plan-request.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SettingComponent } from './pages/setting/setting.component';
import { SearchComponent } from './pages/search/search.component';
import { AddFoundItemComponent } from './pages/add-found-item/add-found-item.component';
import { RegisterEnquiryComponent } from './pages/register-enquiry/register-enquiry.component';
import { PendingComponent } from './pages/pending/pending.component';
import { ProfitAnalysisComponent } from './pages/profit-analysis/profit-analysis.component';
import { SupportComponent } from './pages/support/support.component';

const accountsModule = () => import ('./account/account.module').then(x=> x.AccountModule);
const usersModule = () => import ('./users/users.module').then(x=> x.UsersModule);

const routes: Routes = [
 
    {
      path: '', component: DashboardComponent, canActivate: [AuthGuard], data: {title: 'Dashboard'}
  
      // children: [
      //   {path: 'login', component: LoginComponent},
      //   // {path: 'register', component: RegisterComponent}
      // ]
    },
    {path: 'users', loadChildren: usersModule, canActivate: [AuthGuard], data: {title: 'Users'}},
    {path: 'account', loadChildren: accountsModule},

    {path:'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
    {path:'plan', component: PlanComponent, data: {title: 'Plan'} },
    {path:'plan-request', component: PlanRequestComponent, data: {title: 'Plan Request'} },
    {path:'landing-page', component: LandingPageComponent, data: {title: 'Landing Page'} },
    {path:'setting', component: SettingComponent, data: {title: 'Setting'} },
    {path:'search', component: SearchComponent, data: {title: 'Search'} },
    {path:'add-found-item', component: AddFoundItemComponent, data: {title: 'Add-Found Item'} },
    {path:'register-enquiry', component: RegisterEnquiryComponent, data: {title: 'Register Enquiry'} },
    {path:'pending', component: PendingComponent, data: {title: 'Pending'} },
    {path:'profit-analysis', component: ProfitAnalysisComponent, data: {title: 'Profit Anaylsis'} },
    {path:'support', component: SupportComponent, data: {title: 'Support'} },
    

    
    {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
