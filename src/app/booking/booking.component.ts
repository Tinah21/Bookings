import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  
  firstname
  surname
  date
  age
  constructor(private router:Router) { }
  ngOnInit() {

  }
  onLogin()
  {
    

    console.log(this.firstname)
    console.log(this.surname)
    console.log(this.date)
     console.log(this.age)

  
  }
  booking(){

    this.router.navigate(['detail'],{queryParams:{firstname:this.firstname,surname:this.surname,date:this.date,age:this.age}})
  }
}
