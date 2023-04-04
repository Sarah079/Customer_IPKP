import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer_IPKP';
  @ViewChild('sidenav', {static:true}) sidenav!: MatSidenav;
  
  //logopath:
  logopath: string;
  
  constructor() {
    //image location
    this.logopath = '/assets/images/Logo.jpg'
  }

  toggleSidenav(){
    this.sidenav.toggle();
  }

}
