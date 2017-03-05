import { Component, OnInit, Input } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  size: number;
  src = '/assets/warsawjs-logo.png';
  sizes = new Map<string, number>([['small', 50], ['medium', 100], ['large', 150]]);

  @Input()
  // width: string;
  // or I can aso pass default value
  // width: "400";
  width: 'small' | 'medium' | 'large' = 'small';


  constructor(private videoService: VideoService) {
    // console.log(this.sizes);
    // console.log('constructor width', this.width);
    // console.log('image src', this.src);
    console.log('videoService', videoService);
  }

  ngOnInit() {
    console.log('ngOnInit width', this.width);

    this.size = this.sizes.get(this.width);
  }

}
