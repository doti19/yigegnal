import { Component } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Support');
  }
}
