import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  serviceUrl: string = "http://localhost:9097/api/v1.0/authentication/signup";

  constructor(private http: HttpClient) {
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:9097/api/v1.0/authentication/signup" , user);
  }

  loginUser(user: any): Observable<any> {
    return this.http.post<any>("http://localhost:9097/api/v1.0/authentication/login" , user);
  }

  
  getAllUser(): Observable<any> {
    return this.http.get<any>("http://localhost:9097/api/v1.0/authentication/getAllUsers");
  }
  viewAllEvents(): Observable<any> {
    return this.http.get<any>("http://localhost:9093/api/v1.0/eventService/viewAll");
    
  }

  addFavouriteEvent(wishlist: any): Observable<any> {
    return this.http.post<any>("http://localhost:9098/api/v1.0/wishlistService/wishlist/addFavourite" , wishlist);
  }
  getAllFavouriteEvents(): Observable<any> {
    return this.http.get<any>("http://localhost:9098/api/v1.0/wishlistService/wishlist/viewFavourites");
  }


  GetToken(){

    return localStorage.getItem('token')||'';
  }
}
