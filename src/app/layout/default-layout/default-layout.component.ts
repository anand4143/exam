import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  //showHead: boolean = false;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
