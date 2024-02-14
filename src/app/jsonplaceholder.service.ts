import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  constructor(private http:HttpClient) {}

  getUsersData():Observable<any>{
  
    const url = 'https://jsonplaceholder.typicode.com/'

    return this.http.get<any>(url + "users")

  }

  getAlbumData():Observable<any>{
  
    const url = 'https://jsonplaceholder.typicode.com/'

    return this.http.get<any>(url + "albums")

  }
}
