import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './../../animations';


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  //animations: [slideInAnimation],
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
