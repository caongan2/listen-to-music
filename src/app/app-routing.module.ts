import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlayListComponent} from "./components/play-list/play-list.component";
import {YoutubePlayerComponent} from "./components/youtube-player/youtube-player.component";

const routes: Routes = [
  {
    path: 'playlist',
    component: PlayListComponent,
    children: [
      {
        path: ':id',
        component: YoutubePlayerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
