import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private primeNGConfig:PrimeNGConfig){}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
 }


  // nombre:string ='jOni ferNanDEz'
  // valor:number = 1000;
  // obj = {nombre: 'Joni',}

  // mostrarNombre(){
  //   console.log(this.nombre)
  //   console.log(this.valor)
  // }
}
