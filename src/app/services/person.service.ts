import { Injectable } from '@angular/core';
import Person from '../interfaces/person'

@Injectable({
  providedIn: 'root'
})
export default class PersonService {
  people: Person[];
  constructor() {
    let person: Person = {
    id: '9832882',
    name: 'Juan',
    phone: '4564857822',
    email: 'juan@example.com',
    }
    this.people = [person];
  }
  
  getPeople() {
    return this.people;
  }

  getPerson(personId) {
    return this.people.find((person)=>(person.id == personId));
  }

  setPerson(person: Person) {
    const index = this.people.findIndex((personItem)=>(personItem.id==person.id));
    if(index != -1){
      this.people[index] = person;
    }else{
      this.people.push(person);
    }
  }

  deletePerson(personId) {
    const index = this.people.findIndex((person)=>(person.id==personId));
    if(index != -1){
      this.people.splice(index, 1);
    }
  }
}
