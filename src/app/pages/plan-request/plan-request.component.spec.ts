import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRequestComponent } from './plan-request.component';

describe('PlanRequestComponent', () => {
  let component: PlanRequestComponent;
  let fixture: ComponentFixture<PlanRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanRequestComponent]
    });
    fixture = TestBed.createComponent(PlanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
