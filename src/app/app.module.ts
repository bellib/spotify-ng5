import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * services
 */
import { SpotifyService } from './services/spotify.service';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SingleResultComponent } from './single-result/single-result.component';
import { ResultsearchComponent } from './resultsearch/resultsearch.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CallbackComponent,
    MainComponent,
    SingleResultComponent,
    ResultsearchComponent,

  ],
  imports: [
    BrowserModule ,
    HttpClientModule ,
    RouterModule.forRoot( appRoutes ),
    BrowserAnimationsModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
