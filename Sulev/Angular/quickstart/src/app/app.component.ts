import { Component } from '@angular/core';

export class Person {
  id: number;
  name: string;
}

const PEOPLE: Person[] = [
  { id: 101, name: 'Taavi' },
  { id: 102, name: 'Toomas' },
  { id: 103, name: 'Terje' },
  { id: 104, name: 'Tiina' },
  { id: 105, name: 'Anneli' },
  { id: 106, name: 'Kaspar' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'templates/people.html',
})
export class AppComponent  { 
  name = 'Angular 4'; 
  alapealkiri = 'Alapealkiri';
  person: Person = {
    id: 1,
    name: 'Joonas'
  };
  selectedPerson: Person;

}
