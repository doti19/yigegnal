import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInquiryDialogComponent } from './add-inquiry-dialog.component';

describe('AddInquiryDialogComponent', () => {
  let component: AddInquiryDialogComponent;
  let fixture: ComponentFixture<AddInquiryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInquiryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInquiryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
