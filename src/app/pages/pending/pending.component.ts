import { Component } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent {
  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Pending');
  }
}
