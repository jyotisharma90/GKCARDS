import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SonglistService } from "./services/songlist.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SONGHUB';
  songs : any;
  constructor(private SonglistService: SonglistService, ) { 
    
  }
  ngOnInit() {
    this.getAllSongs();
  }

  getAllSongs(){
    this.SonglistService.getSongList().subscribe(
      (data) => {
          this.songs = data.feed.entry;
          console.log(this.songs[0]['im:image'])
       });
  }
}
