import { Component } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  albumsData: Array<any>

  constructor(private JsonPlaceHolder:JsonplaceholderService){
    this.albumsData = new Array<any>
  }

  getAlbums(){
    this.JsonPlaceHolder.getAlbumData().subscribe((data) => {
      console.log(data)
      this.albumsData = data
    })
  }

}
