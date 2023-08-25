import { Component } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-profit-analysis',
  templateUrl: './profit-analysis.component.html',
  styleUrls: ['./profit-analysis.component.css']
})
export class ProfitAnalysisComponent {

  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Profit Analysis');
  }
}
