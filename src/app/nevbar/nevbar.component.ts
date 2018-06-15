import { DetailComponent } from './../detail/detail.component';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nevbar',
  templateUrl: './nevbar.component.html',
  styleUrls: ['./nevbar.component.css']
})
export class NevbarComponent implements OnInit {

  @Input() name;
  @Input() page;

  @Input() firstname;
  @Input() surname;
  @Input() date;
  @Input() age;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigator(){
   
    if(this.name === 'events'){
      this.router.navigate(['detail/events'])
    }
    else if(this.name === 'view'){
      this.router.navigate(['detail/view'],{queryParams:{firstname:this.firstname,surname:this.surname,date:this.date,age:this.age}})

    }
  }
  
}
