import { Component,OnInit  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { SonglistService } from "./services/songlist.service";
declare var $ :any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SONGHUB';
  songs :any= [];
  filteredData:any=[];
  selectedData :any= [];
  selectedItem:any;
  selectAll:any;
  constructor(private SonglistService: SonglistService, ) { 
    
  }
  ngOnInit() {
    this.getAllSongs();
    this.selectAll = 'all';
    
  }

  getAllSongs(){
    let obj = {};
    this.SonglistService.getSongList().subscribe(
      (data) => {
          this.songs = data.feed.entry;
          console.log(this.songs[0]['im:image'])
          let filteredNames=this.remove_duplicates(this.songs);
          this.selectedData = this.songs;

       });
  }
    remove_duplicates(arr) {
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
          obj[arr[i].category.attributes.label] = true;
      }
    
      for (let key in obj) {
          this.filteredData.push(key);
         
      }
  }
  
  onSelect(val ){
  console.log(val);
  this.selectAll = '';
  this.selectedItem = val;
  this.selectedData = this.songs.filter(x => x.category.attributes.label == val)

}
  showAll(selectall){
    this.selectAll = selectall;
    this.selectedItem = "";
    this.selectedData = this.songs;

  }


}
$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
      $('.navbar-default').css('top','0');
      // $('nav div').addClass('visible-title');
  }
  else {
    $('.navbar-default').css('top','40px');
  }
});