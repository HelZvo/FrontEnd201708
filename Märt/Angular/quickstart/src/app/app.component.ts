import { Component } from '@angular/core';
export class Person{
  id: number;
  name: string;
}
const PEOPLE: Person[] = [
  { id: 101, name: 'Juku'},
  { id: 102, name: 'Malle'},
  { id: 103, name: 'Kalle'},
  { id: 104, name: 'Märt'},
  { id: 105, name: 'Anna'},
];
@Component({
  selector: 'my-app',
  templateUrl: 'templates/people.html',
})
export class AppComponent  { 
  name = 'Angular 4';
  alapealkiri = 'Alapealkiri';
  person: Person ={
    id: 1,
    name: 'Juku'
  };
  selectedPerson: Person;

  
};
