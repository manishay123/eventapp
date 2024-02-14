import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-wishlist',
  templateUrl: './add-wishlist.component.html',
  styleUrl: './add-wishlist.component.css'
})
export class AddWishlistComponent {
  
  events! :EventList;
  constructor(private appservice: ServiceService, private router: Router, private toastr:ToastrService , private form: FormBuilder){}


  ngOnInit(): void{
    this.appservice.getAllFavouriteEvents().subscribe(data=>{
     this.events= data;
     console.log(this.events);
    })
   
   
   
   }
}
interface EventList{
  responseObj: Event[]
  }
  interface Event{
    wishlistid: number;
    type: string;
      id: number;
      datetime_utc: string;
      venue:Venue
      performers: Performer[];
    }
    interface Venue{
      venueid: number;
      name: string;
      capacity: string;
      country: string;
    };
    interface Performer {
      perfid: number;
      score: string;
      name: string;
    
  
  }