import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Data, NavigationEnd} from '@angular/router';
import { filter, map } from 'rxjs';

import { User } from '@shared/_models/user';
import { AccountService } from '@shared/_services/account.service';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  user: User | null;
  pageTitle: string = '';
  constructor(
    private router: Router,
    private route:ActivatedRoute,
    
    private headerTitleService: HeaderTitleService,
    private accountService: AccountService
  ){
    this.user = this.accountService.userValue;
    // if(this.accountService.userValue){
    //   this.router.navigate(['/']);
    // }
  }
  ngOnInit(): void {

    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['title']) {
          routeTitle = route!.snapshot.data['title'];
        }
        return routeTitle;
      })
    )
    .subscribe((title: string) => {
      if (title) {
        this.pageTitle = title;
        // this.titleService.setTitle(`My App - ${title}`);
      }
    });
}


    // this.headerTitleService.title.subscribe(updatedTitle =>{
    //   this.pageTitle = updatedTitle;
    // })
    // this.pageTitle = this.route.snapshot.data['title'];
  //  this.route.data.subscribe(
  //   (data: Data)=>{
  //     this.pageTitle = data['title'];
  //   }
  //  );
  }  

  



