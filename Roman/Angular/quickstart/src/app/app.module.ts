import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component/app.component';
import { PeopleComponent } from './people.component/people.component';
import { PersonComponent } from './person.component/person.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule
                 ],
  declarations: [ AppComponent,
                  PeopleComponent,
                  PersonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
