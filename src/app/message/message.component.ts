import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  Count = 0;
  constructor() { }

  ngOnInit() {
  }

  // ngstyle練習
  GetStyle() {
    return { 'font-size': (12 + this.Count) + 'px' };
  }

  CountPlus() {
    this.Count++;
  }

  CountMinus(){
    this.Count--;
  }
}
