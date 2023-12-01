import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveSlotComponent } from './reserve-slot.component';

describe('ReserveSlotComponent', () => {
  let component: ReserveSlotComponent;
  let fixture: ComponentFixture<ReserveSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveSlotComponent]
    });
    fixture = TestBed.createComponent(ReserveSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
