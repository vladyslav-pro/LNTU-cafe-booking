import { Component } from '@angular/core';
import {UserDataInterface} from "../../shared/interfaces/user-data.interface";

@Component({
  selector: 'user-data',
  standalone: true,
  imports: [],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent {
  userData: UserDataInterface = {
    firstName: 'Test',
    lastName: 'User',
    phoneNumber: '+380333333333',
    email: 'some.random@email.com',
    id: 'some123456randomID'
  }

}
