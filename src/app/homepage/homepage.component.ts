import { Component } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  usersData:Array<any>

  constructor(private JsonPlaceHolder:JsonplaceholderService){
    this.usersData = new Array<any>
  }

  getUsers(){
    this.JsonPlaceHolder.getUsersData().subscribe((data) => {
      console.log(data)
      this.usersData = data
    })
  }



}
