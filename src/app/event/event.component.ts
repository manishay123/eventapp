import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
  encapsulation: ViewEncapsulation.None
})
export class EventComponent implements OnInit {
  events! :EventList;
    
  constructor(private appservice: ServiceService, private router: Router, private toastr:ToastrService , private form: FormBuilder){
   
  }


  ngOnInit(): void{
    this.appservice.viewAllEvents().subscribe(data =>{
     this.events= data;
     console.log(this.events);
    
    })
   
   
   
   }

   addEvent(event : any){
    
    this.appservice.addFavouriteEvent(event).subscribe(data => {
        console.log(event)
      this.toastr.success("Events Added Successfully.", 'Success');
      
     

    }, error => {
      this.toastr.error("Something went wrong", 'Error');
    })
   }
}

interface EventList{
  events: Event[]
  }
  interface Event{
    type: string;
      id: number;
      datetime_utc: string;
      venue:Venue
      performers: Performer[];
    }
    interface Venue{
      name: string;
      capacity: string;
      country: string;
    };
    interface Performer {
      score: string;
      name: string;
    
  
  }
  
