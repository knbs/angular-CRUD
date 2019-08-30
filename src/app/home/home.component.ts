import { Component, OnInit } from '@angular/core';
import Person from '../interfaces/person'
import UserService from '../services/person.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  people: Person[];
  json: String;
  constructor(private userService: UserService) {
    this.people = userService.getPeople();
    this.json = JSON.stringify(this.people, null, 4);
  }

  ngOnInit() {
  }

}
