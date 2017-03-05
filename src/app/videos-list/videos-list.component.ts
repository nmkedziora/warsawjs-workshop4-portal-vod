import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements OnInit {
  @Output()
  openVideo = new EventEmitter;

  constructor(private videosList: VideoService) {
    console.log('videosList', videosList);
  }

  ngOnInit() {
  }

  onWatchVideo(videoSource: string) {
    console.log('Videos List: watching', videoSource);
    this.openVideo.emit(videoSource);
  }

}
