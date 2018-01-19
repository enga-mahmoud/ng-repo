import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  itemCount : number;
  itemValue : string = 'My First Goal In Life ....';
  goals = [];

  constructor(private _data:DataService) {

   }

  ngOnInit() {
    this._data.goalsObservableObject.subscribe(res => this.goals = res); // the observable object of the goals data service will be used to make sure that all data is received then the response will be used to update the home local copy of goals
    this.itemCount = this.goals.length;
    this._data.changeGoals(this.goals);
  }

  addItem()
  {
     this.goals.push(this.itemValue);
     this.itemValue = '';
     this.itemCount = this.goals.length;
     this._data.changeGoals(this.goals);

  }

  removeItem(i)
  {

    this.goals.splice(i , 1);
    this._data.changeGoals(this.goals);
    this.itemCount = this.goals.length;
  }

}
