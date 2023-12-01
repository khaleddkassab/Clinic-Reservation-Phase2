import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientReservationsComponent } from './view-patient-reservations.component';

describe('ViewPatientReservationsComponent', () => {
  let component: ViewPatientReservationsComponent;
  let fixture: ComponentFixture<ViewPatientReservationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPatientReservationsComponent]
    });
    fixture = TestBed.createComponent(ViewPatientReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
