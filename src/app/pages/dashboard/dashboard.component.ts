import { Component, OnInit } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor(private headerTitleService: HeaderTitleService){
 
}
  ngOnInit(): void {
    this.headerTitleService.setTitle('Dashboard');
    
  }
}
