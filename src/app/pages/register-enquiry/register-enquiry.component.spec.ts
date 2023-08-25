import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEnquiryComponent } from './register-enquiry.component';

describe('RegisterEnquiryComponent', () => {
  let component: RegisterEnquiryComponent;
  let fixture: ComponentFixture<RegisterEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterEnquiryComponent]
    });
    fixture = TestBed.createComponent(RegisterEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
