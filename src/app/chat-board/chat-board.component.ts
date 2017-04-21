import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})

export class ChatBoardComponent implements OnInit {

  @Input() comment:String;

  constructor() {
    this.comment = '';
  }

  ngOnInit() {

  }

}
