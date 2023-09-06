import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSearchResultDialogComponent } from './edit-search-result-dialog.component';

describe('EditSearchResultDialogComponent', () => {
  let component: EditSearchResultDialogComponent;
  let fixture: ComponentFixture<EditSearchResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSearchResultDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSearchResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
