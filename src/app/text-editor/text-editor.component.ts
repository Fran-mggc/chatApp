import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})

export class TextEditorComponent implements OnInit {

  count:number;
  @Output() incrementOne = new EventEmitter<Boolean>();
  @Output() pushComment = new EventEmitter<Object>();
  message:String

  constructor() {
    this.count=0;
    this.message = 'Hola';
  }

  incrementCount(){
    this.incrementOne.emit();
    //this.count++;
  }

  insertComment(){
    this.pushComment.emit({message:this.message});
  }

  ngOnInit() {
  }

}
