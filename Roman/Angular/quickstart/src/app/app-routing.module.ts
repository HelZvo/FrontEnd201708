import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people.component/people.component';
import { PersonComponent } from './person.component/person.component';

const routes: Routes = [
    { path: '', redirectTo: '/people', pathMatch: 'full'},
    { path: 'people', component: PeopleComponent },
    { path: 'person/:id', component: PersonComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
