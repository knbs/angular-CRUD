import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import UserService from '../services/person.service';
import Person from '../interfaces/person'
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
    if(personId){
      this.person = userService.getPerson(personId);
    }else{
      const num = (new Date()).getTime()+'';
      this.person.id = num.slice(6)
      
    }
  }

  handleSubmit() {
    const form = document.getElementById('myform') as HTMLFormElement;
    const formdata = new FormData(form);
    const person:Person = {
      id: formdata.get('id') as string,//simulating unique ids
      name: formdata.get('name') as string,
      phone: formdata.get('phone') as string,
      email: formdata.get('email') as string,
    }
    this.userService.setPerson(person);
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }

}
