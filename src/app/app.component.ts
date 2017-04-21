import { Component } from '@angular/core';
import {TextEditorComponent} from './text-editor/text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app works!';
  fatherCounter:number;
  fatherComment:String;


  constructor(){
    this.fatherCounter = 0;
    this.fatherComment = '';
  }

  handleIncrement(){
    this.fatherCounter++;
  }

  handleComment(event){
    this.fatherComment = event.message;
  }
}
