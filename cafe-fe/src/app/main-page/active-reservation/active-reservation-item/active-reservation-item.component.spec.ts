import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveReservationItemComponent } from './active-reservation-item.component';

describe('ActiveReservationItemComponent', () => {
  let component: ActiveReservationItemComponent;
  let fixture: ComponentFixture<ActiveReservationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveReservationItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveReservationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
