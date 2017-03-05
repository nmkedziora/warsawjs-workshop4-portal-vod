import { Component, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @HostBinding('class.visible')
  @Input()
  visible: boolean;
  src: string;

  @HostListener('click')
  closeModal() {
    console.log('test');
    this.visible = false;
  }


  constructor() { }

  ngOnInit() {
  }

}
