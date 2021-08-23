import { Component, OnInit } from '@angular/core';
import {Song} from "../../song";
import {SongService} from "../../services/song.service";

@Component({
  selector: 'app-play-list',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent implements OnInit {
  playList: Song[] = []
  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.playList = this.songService.playList
  }
}
