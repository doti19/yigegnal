import { Component } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Landing Page');
  }
}
