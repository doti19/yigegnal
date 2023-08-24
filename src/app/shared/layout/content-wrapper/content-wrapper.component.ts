import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '@shared/_models/user';
import { AccountService } from '@shared/_services/account.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent {

  user: User | null;
  constructor(
    private router: Router,
    private accountService: AccountService
  ){
    this.user = this.accountService.userValue;
    // if(this.accountService.userValue){
    //   this.router.navigate(['/']);
    // }
  }

}
