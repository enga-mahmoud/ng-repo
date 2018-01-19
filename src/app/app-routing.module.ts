import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes , RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes : Routes = [

  {
    path : 'home' ,
    component : HomeComponent
},
{
  path : 'about/:id1/:id2' ,
  component : AboutComponent
}

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
    CommonModule
  ],
  declarations: [] ,
  exports : [RouterModule]
})
export class AppRoutingModule { }
