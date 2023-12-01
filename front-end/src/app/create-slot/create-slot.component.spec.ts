import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSlotComponent } from './create-slot.component';

describe('DoctorComponent', () => {
  let component: CreateSlotComponent;
  let fixture: ComponentFixture<CreateSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSlotComponent]
    });
    fixture = TestBed.createComponent(CreateSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
