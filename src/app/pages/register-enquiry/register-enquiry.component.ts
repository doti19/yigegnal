import { Component } from '@angular/core';
import { HeaderTitleService } from '@shared/_services/headerTitle.service';

@Component({
  selector: 'app-register-enquiry',
  templateUrl: './register-enquiry.component.html',
  styleUrls: ['./register-enquiry.component.css']
})
export class RegisterEnquiryComponent {

  constructor(private headerTitleService: HeaderTitleService){

  }
  ngOnInit(): void {
    this.headerTitleService.setTitle('Register Enquiry');
  }
}
