import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitAnalysisComponent } from './profit-analysis.component';

describe('ProfitAnalysisComponent', () => {
  let component: ProfitAnalysisComponent;
  let fixture: ComponentFixture<ProfitAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitAnalysisComponent]
    });
    fixture = TestBed.createComponent(ProfitAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
