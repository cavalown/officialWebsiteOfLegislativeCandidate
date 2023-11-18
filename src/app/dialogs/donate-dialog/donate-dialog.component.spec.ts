import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateDialogComponent } from './donate-dialog.component';

describe('DonateDialogComponent', () => {
  let component: DonateDialogComponent;
  let fixture: ComponentFixture<DonateDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonateDialogComponent]
    });
    fixture = TestBed.createComponent(DonateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
