import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video.interface';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.css']
})
export class VideoItemComponent implements OnInit {
  @Input()
  video: Video;

  @Output()
  watchVideo = new EventEmitter;

  constructor(private videoService: VideoService) {
    console.log('VideoItemComponent', videoService);
  }

  ngOnInit() {
  }

  onButtonClickHandler(event: MouseEvent) {
    console.log('onButtonClickHandler', event);
    this.watchVideo.emit(this.video.source);
  }

}
