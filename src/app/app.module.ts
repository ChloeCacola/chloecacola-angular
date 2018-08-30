import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { PhotographyComponent } from './photography/photography.component';
import { ArtComponent } from './art/art.component';
import { SoftwaredevComponent } from './softwaredev/softwaredev.component';
import { WebsitedevComponent } from './websitedev/websitedev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmComponent,
    PhotographyComponent,
    ArtComponent,
    SoftwaredevComponent,
    WebsitedevComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
