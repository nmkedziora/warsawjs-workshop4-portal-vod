import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalVisible = false;
  videoSrc = '';

  constructor() {
    console.log('this.modalVisible', this.modalVisible);
  }

  ngOnInit() {
    console.log('this.modalVisible', this.modalVisible);
  }

  loadVideo(event) {
    console.log('app Component loadVideo', event);
    this.modalVisible = true;
    this.videoSrc = event;
  }
}
