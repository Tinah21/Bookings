
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import {RouterModule} from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AppRoutes } from './app.routes.module';
import { DetailComponent } from './detail/detail.component';
import { EventsComponent } from './events/events.component';
import { NevbarComponent } from './nevbar/nevbar.component';
@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    ViewComponent,
    DetailComponent,
    EventsComponent,
    NevbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
