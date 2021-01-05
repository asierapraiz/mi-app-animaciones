import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { slideInAnimation } from './../../animations';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  animations: [
    slideInAnimation
  ],
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['./suma'], { relativeTo: this.route });
    }, 1000);
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }



}
