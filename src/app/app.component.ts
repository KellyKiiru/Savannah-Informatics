import { Component } from '@angular/core';
import { JsonplaceholderService } from './jsonplaceholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'savannah-informatics';

  usersData:Array<any>
  albumsData: Array<any>

  constructor(private JsonPlaceHolder:JsonplaceholderService){
    this.usersData = new Array<any>
    this.albumsData = new Array<any>
  }

  getUsers(){
    this.JsonPlaceHolder.getUsersData().subscribe((data) => {
      console.log(data)
      this.usersData = data
    })
  }

  getAlbums(){
    this.JsonPlaceHolder.getAlbumData().subscribe((data) => {
      console.log(data)
      this.albumsData = data
    })
  }
}

