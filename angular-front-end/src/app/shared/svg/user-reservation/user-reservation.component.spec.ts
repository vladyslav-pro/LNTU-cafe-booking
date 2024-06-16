import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservationComponent } from './user-reservation.component';

describe('UserReservation2Component', () => {
  let component: UserReservationComponent;
  let fixture: ComponentFixture<UserReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
