import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['My First Life Goal','My Silly Life Goal..']);

  goalsObservableObject = this.goals.asObservable(); // he converted the array into observable object to wait for it at real time to get the actual response if it will to be fetched from an rest http call

  constructor() { }

  changeGoals(goal)
  {
   this.goals.next(goal);

  }

}
