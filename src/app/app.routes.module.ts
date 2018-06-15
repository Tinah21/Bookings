import { Component } from '@angular/core';
import { ViewComponent } from "./view/view.component";
import { BookingComponent } from './booking/booking.component';
import { DetailComponent } from './detail/detail.component';
import { EventsComponent } from './events/events.component';

export const AppRoutes=[
      
      {path:'',component:BookingComponent},
      {path: 'detail', component:DetailComponent, children: [
            {path: 'events',component:EventsComponent},
            {path: 'view',component:ViewComponent},
           
      ]}
     
];