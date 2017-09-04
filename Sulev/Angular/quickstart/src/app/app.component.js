"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var PEOPLE = [
    { id: 101, name: 'Taavi' },
    { id: 102, name: 'Toomas' },
    { id: 103, name: 'Terje' },
    { id: 104, name: 'Tiina' },
    { id: 105, name: 'Anneli' },
    { id: 106, name: 'Kaspar' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 4';
        this.alapealkiri = 'Alapealkiri';
        this.person = {
            id: 1,
            name: 'Joonas'
        };
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'templates/people.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map