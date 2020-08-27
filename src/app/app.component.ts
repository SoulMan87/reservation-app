import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reservation-app';

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';
  private reservationUrl: string = this.baseUrl + '/room/v1/reservation';
  rooms: Room[];

  ngOnInit () {
    this.rooms = [new Room('127', '137', '150'),
      new Room('113', '183', '145'),
      new Room('823', '130', '152')];
  }

}

export class Room {
  id: string;
  roomNumber: string;
  price: string;

  constructor(id: string, roomNumber: string, price: string) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.price = price;
  }
}
