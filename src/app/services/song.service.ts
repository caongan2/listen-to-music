import { Injectable } from '@angular/core';
import {Song} from "../song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playList: Song[] = [
    {
      id: 'xt_Uxwqw3Ag',
      name: 'mashup v1'
    },
    {
      id: 'BC9WhIIXuEU',
      name: 'mashup v2'
    }
  ]
  constructor() { }

  findSongById(id: string | null) {
    return this.playList.find(item => item.id === id)
  }
}
