import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../../animations';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  //animations: [slideInAnimation],
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
