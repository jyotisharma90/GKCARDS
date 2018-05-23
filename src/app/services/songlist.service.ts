import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SonglistService {
  reqUrl = 'https://itunes.apple.com/in/rss/topalbums/limit=100/json';
  constructor(private http: HttpClient) { }
    getSongList(): Observable<any>{
      return this.http.get(this.reqUrl)
      .map((resp) => {
      console.log(resp);
      return resp
    });
  }
}
