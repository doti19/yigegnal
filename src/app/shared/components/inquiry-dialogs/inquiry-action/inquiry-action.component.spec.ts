import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryActionComponent } from './inquiry-action.component';

describe('InquiryActionComponent', () => {
  let component: InquiryActionComponent;
  let fixture: ComponentFixture<InquiryActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiryActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
