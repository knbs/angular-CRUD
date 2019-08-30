import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UserService from '../services/person.service';
import Person from '../interfaces/person'
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  person: Person = {
    id: null,
    name: '',
    phone: '',
    email: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    const personId = this.activatedRoute.snapshot.params['personId'];
    this.person = userService.getPerson(personId);
  }

  ngOnInit() {
  }

  handleDelete(){
    this.userService.deletePerson(this.person.id);
    this.router.navigateByUrl('/');
  }

}
