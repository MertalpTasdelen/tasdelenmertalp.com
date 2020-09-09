import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';   


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // Material Style Basic Audio Player Title and Audio URL
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisablePositionSlider = true;

  // Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: '/assets/episodes/TahtaMasaE5v0_1.mp3'
  },
  {
    title: 'Audio Two Title',
    link: '/assets/episodes/TahtaMasaE5v0_1.mp3'
  },
  {
    title: 'Audio Three Title',
    link: '/assets/episodes/TahtaMasaE5v0_1.mp3'
  },
];

  constructor() { }

  ngOnInit(): void {
  }

  onEnded(eventData){
    console.log("We can use that event to trigger to skip next episode!");
  }
  
}
