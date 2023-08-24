import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentWrapperComponent } from './shared/layout/content-wrapper/content-wrapper.component';

import { AuthGuard } from '@shared/_helpers';
import { MainFooterComponent } from '@shared/layout/main-footer/main-footer.component';

const accountsModule = () => import ('./account/account.module').then(x=> x.AccountModule);
const usersModule = () => import ('./users/users.module').then(x=> x.UsersModule);

const routes: Routes = [
 
    {
      path: '', component: MainFooterComponent, canActivate: [AuthGuard]
  
      // children: [
      //   {path: 'login', component: LoginComponent},
      //   // {path: 'register', component: RegisterComponent}
      // ]
    },
    {path: 'users', loadChildren: usersModule, canActivate: [AuthGuard]},
    {path: 'account', loadChildren: accountsModule},
    {path: '**', redirectTo: ''}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
