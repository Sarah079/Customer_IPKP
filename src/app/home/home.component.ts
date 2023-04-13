import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //logopath:
  homeimgpath: string;
  
  constructor() {
    //image location
    this.homeimgpath = '/assets/images/Home_fam_photo.png'
  }
}

//src\assets\images\Home_fam_photo.png