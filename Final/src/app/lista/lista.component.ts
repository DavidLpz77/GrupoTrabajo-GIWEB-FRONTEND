import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() primerItem: string;
  @Input() segundoItem: string;
  @Input() tercerItem: string;

  constructor() { 
   this.primerItem="";
   this.segundoItem="";
   this.tercerItem="";
  }

  

  ngOnInit(): void {
  }

}



