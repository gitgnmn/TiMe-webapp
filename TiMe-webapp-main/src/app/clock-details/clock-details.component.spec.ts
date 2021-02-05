import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDetailsComponent } from './clock-details.component';

describe('ClockDetailsComponent', () => {
  let component: ClockDetailsComponent;
  let fixture: ComponentFixture<ClockDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
