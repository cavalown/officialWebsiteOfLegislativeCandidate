import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdropdownComponent } from './navdropdown.component';

describe('NavdropdownComponent', () => {
  let component: NavdropdownComponent;
  let fixture: ComponentFixture<NavdropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavdropdownComponent]
    });
    fixture = TestBed.createComponent(NavdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
