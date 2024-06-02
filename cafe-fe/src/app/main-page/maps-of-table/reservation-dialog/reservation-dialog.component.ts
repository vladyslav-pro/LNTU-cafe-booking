import {Component, ElementRef, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";

@Component({
  selector: 'reservation-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogClose,
    MatFormField,
    MatFormFieldModule,
    MatDatepickerToggle,
    MatInputModule,
    MatDatepicker,
    MatDatepickerModule,
    MatSelectModule,
    MatIcon
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reservation-dialog.component.html',
  styleUrl: './reservation-dialog.component.scss',
})
export class ReservationDialogComponent {
  tableNumber: number = 1;
  bookingTime: string = '';
  bookingDate: string = '';
  bookingDuration: number[] = [30,60,90];
  bookingDurationValue!: number;
  guestName: string = '';

  constructor(
    private elementRef: ElementRef,
    public dialogRef: MatDialogRef<ReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('data', data)
  }

  onSubmit(){}
}
