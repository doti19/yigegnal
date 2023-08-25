import { Component, OnInit, } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-plan-request',
  templateUrl: './plan-request.component.html',
  styleUrls: ['./plan-request.component.css']
})
export class PlanRequestComponent implements OnInit {

  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Plan Request');
    $.getScript('../../../assets/js/dataTable.js');
  }
  // ngAfterInit() {
  //   import('./myfile.js')
  //  }
}
