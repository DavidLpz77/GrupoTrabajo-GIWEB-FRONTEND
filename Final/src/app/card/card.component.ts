import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() num: string;
  @Input() nombre: string;
  @Input() mensaje: string;

  constructor() {
   this.num="";
   this.nombre="";
   this.mensaje="";
   }

  ngOnInit(): void {
  }

}

