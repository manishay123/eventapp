import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userId: any;
  user!: User;
  
  form: FormGroup = new FormGroup({
    'firstName': new FormGroup(''),
    'lastName': new FormGroup(''),
    'username': new FormGroup(''),
    'password': new FormGroup(''),
    'email': new FormGroup(''),
    'number': new FormGroup('')
   
  });

 

   constructor(private toastr: ToastrService, private authService: ServiceService , private formBuilder: FormBuilder, private router : Router) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', Validators.required],
        email: ['', Validators.required],
        number: ['', Validators.required],
       
    });
  }





   onSubmit() {
    this.user = {
      firstName: this.form.controls['firstName'].value,
      lastName: this.form.controls['lastName'].value,
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
      email: this.form.controls['email'].value,
      number: this.form.controls['number'].value,
      
      }
    

    console.log(this.user);

    this.authService.registerUser(this.user).subscribe(data => {

      this.toastr.success("User Added Successfully.", 'Success');
      
     this.router.navigate(['/login'])

    }, error => {
      this.toastr.error("Something went wrong", 'Error');
    })
  }
}
