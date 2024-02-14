import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { UsersComponent } from './users/users.component';
import { AddWishlistComponent } from './add-wishlist/add-wishlist.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "events", component: EventComponent
  },
  {
    path: "users", component: UsersComponent
  },
  {
    path: "wishlist", component: AddWishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
