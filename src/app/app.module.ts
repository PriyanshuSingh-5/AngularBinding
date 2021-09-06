import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './Components/interpolation/interpolation.component';
import { PropertyComponent } from './Components/property/property.component';
import { EventComponent } from './Components/event/event.component';
import { TwoWayComponent } from './Components/two-way/two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyComponent,
    EventComponent,
    TwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
