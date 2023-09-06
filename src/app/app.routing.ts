import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './pages/layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AuthGuard } from './shared/helpers/auth-guard/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { RouteGuard } from './shared/helpers/route-guard/route.guard';
// import { AccountModule } from './account/account.module';
// const accountsModule = () => import ('./account/account.module').then(x=> x.AccountModule);

const routes: Routes =[
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }, 
  // {path: 'account', loadChildren: accountsModule},
  // {
  //   path: 'admin',
  //   canActivate:[AuthGuard,RouteGuard],
  //   loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)
  // },
  // {
  //   path: 'super-admin',
  //   canActivate: [AuthGuard,RouteGuard],
  //   loadChildren: ()=> import('./super-admin/super-admin.module').then(m=>m.SuperAdminModule),
  // },
  // {
  //   path: 'db-analysist',
  //   canActivate: [AuthGuard,RouteGuard],
  //   loadChildren: ()=> import('./db-analysist/db-analysist.module').then(m=> m.DbAnalysistModule),
  // },
  // {
  //   path: 'delivery',
  //   canActivate: [AuthGuard,RouteGuard],
  //   loadChildren: ()=> import('./delivery/delivery.module').then(m=>m.DeliveryModule),
  // },

  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./pages/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'log-in', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },

  // {path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
