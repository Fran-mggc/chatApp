import { Component } from '@angular/core';
import {UsersService} from "./users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app works!';
  fatherCounter:number;
  fatherComments:object[];
  isPair:Boolean;
  fatherUsers: object[];

  constructor(private usersService:UsersService){
    this.fatherCounter = 0;
    this.fatherComments = [];
    this.isPair = false;
    this.getUsers();
  }

  handleIncrement(){
    this.fatherCounter++;
  }

  handleComment(event){
    this.isPair = !this.isPair;
    let comment = {
      message: event.message,
      pair : this.isPair,
      me: false
    }

    this.fatherComments.push(comment);
  }

  getUsers(){
    this.usersService.getUsers().subscribe(
      users => { this.fatherUsers = users; console.log(users); }
    );
  }
}
