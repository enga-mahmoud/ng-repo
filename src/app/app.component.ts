import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit{
 
  title = 'app';
  str : string = '444';

 constructor()
 {

 }

  ngOnInit(): void {
   //console.log('sddfsdsf');
    this.str = 'Angular 5 : Mahmoud Gabr';
    this.title = 'My New App';
  }
 



}
