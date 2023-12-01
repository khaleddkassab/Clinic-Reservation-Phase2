import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSlotsByDoctorIdComponent } from './see-slots-by-doctor-id.component';

describe('SlotComponent', () => {
  let component: SeeSlotsByDoctorIdComponent;
  let fixture: ComponentFixture<SeeSlotsByDoctorIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeSlotsByDoctorIdComponent]
    });
    fixture = TestBed.createComponent(SeeSlotsByDoctorIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
