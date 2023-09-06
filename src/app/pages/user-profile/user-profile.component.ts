import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthService } from '../../shared/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
currentUser: User = {};
  constructor(
    public authService: AuthService,
    private actRoute: ActivatedRoute,
  ) { 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res)=>{
      console.log(res);
      this.currentUser = res;
    })
  }
  logout(){
    this.authService.doLogout();
  }
  ngOnInit() {
  }

}
