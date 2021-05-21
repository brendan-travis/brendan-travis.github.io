import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  host: {
    class: 'height-100'
  }
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
