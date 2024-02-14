import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any;
  constructor(private appservice: ServiceService, private router: Router, private toastr:ToastrService , private form: FormBuilder){}


  ngOnInit(): void{
    this.appservice.getAllUser().subscribe(data=>{
     this.users= data;
     console.log(this.users);
    })
   
   
   
   }
}
