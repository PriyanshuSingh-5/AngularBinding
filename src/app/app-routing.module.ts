import { BindingParser } from '@angular/compiler/src/template_parser/binding_parser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './Components/event/event.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { PropertyComponent } from './Components/property/property.component';
import { TwoWayComponent } from './Components/two-way/two-way.component';

const routes: Routes = [
  {path: 'binding', component: InterpolationComponent},
  {path: 'property', component: PropertyComponent},
  {path: 'event', component: EventComponent},
  {path: 'TwoWay', component: TwoWayComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
