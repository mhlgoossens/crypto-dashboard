import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Output() logRequest = new EventEmitter;

  clickMessage = 'not clicked yet';
  counter = 0;

  activateLogger = () => {
    this.counter += 1;
    this.logRequest.emit(console.log('hello x', this.counter));
    this.clickMessage = `clicked ${this.counter} times`;

  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
