import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapsOfTableComponent } from './maps-of-table.component';

describe('MapsOfTableComponent', () => {
  let component: MapsOfTableComponent;
  let fixture: ComponentFixture<MapsOfTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapsOfTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapsOfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
