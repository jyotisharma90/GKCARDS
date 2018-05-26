import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SonglistService } from './services/songlist.service';
import { FilterPipe} from './services/filter.pipe';
import { FilterUniquePipe} from './services/filterunique.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    FilterUniquePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SonglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
