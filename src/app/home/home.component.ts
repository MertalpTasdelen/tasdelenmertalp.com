import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Audio Title';
  msbapAudioUrl = '/assets/episodes/TahtaMasaE5v0_1.mp3';   
   
  msbapDisplayTitle = false; 
  msbapDisplayVolumeControls = true;  
  // msbapDisablePositionSlider = true;

  constructor() { }

  ngOnInit(): void {
  }

  onEnded(eventData){
    console.log("We can use that event to trigger to skip next episode!");
  }
  
}
