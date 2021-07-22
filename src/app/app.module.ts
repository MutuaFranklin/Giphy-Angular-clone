import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingComponent } from './trending/trending.component';
import { ArtistsComponent } from './artists/artists.component';
import { ClipsComponent } from './clips/clips.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundPageComponent } from './not-found/not-found-page/not-found-page.component';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NgProgressModule } from '@ngx-progressbar/core';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    TrendingComponent,
    ArtistsComponent,
    ClipsComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
