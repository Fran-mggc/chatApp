import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  count:number;
  @Output() incrementOne = new EventEmitter<object>();

  constructor() {
    this.count=0;
  }

  incrementCount(){
    this.incrementOne.emit({increment:2});
    //this.count++;
  }

  ngOnInit() {
  }

}
