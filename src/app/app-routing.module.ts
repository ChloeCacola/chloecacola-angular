import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// pages
import { HomeComponent } from './home/home.component';
import { FilmComponent } from './film/film.component';
import { PhotographyComponent } from './photography/photography.component';
import { ArtComponent } from './art/art.component';
import { WebsitedevComponent } from './websitedev/websitedev.component';
import { SoftwaredevComponent } from './softwaredev/softwaredev.component';

const appRoutes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'film', component:  FilmComponent },
  { path: 'photography', component:  PhotographyComponent },
  { path: 'art', component: ArtComponent },
  { path: 'websites', component: WebsitedevComponent },
  { path: 'softwaredev', component: SoftwaredevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
