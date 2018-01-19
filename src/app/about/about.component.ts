import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';  /// to fetch query parameter

import { Router } from '@angular/router';  /// to make component self routing logic

import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  QueryParam1 : string ;
  QueryParam2 : string ;

  goals : any;

  // constructor dependcy injection called when first initialized

  constructor(private route : ActivatedRoute , private router : Router , private _data:DataService) { 
    this.route.params.subscribe(res => this.QueryParam1 = res.id1 );
    this.route.params.subscribe(res => this.QueryParam2 = res.id2 );
  }

  ngOnInit() {
   this._data.goalsObservableObject.subscribe(res => this.goals = res);

  }

  sendMeHome()
  {

    this.router.navigate(['home']);
  }

}
