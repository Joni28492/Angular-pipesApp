import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',

})
export class OrdenarComponent  {

  
  enMayusculas:boolean = true;
  ordenarPor:string = '';

  heroes:Heroe[] = [
    {
      nombre:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color: Color.verde
    },
  ]

  
  
  toggleMayus():void{
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
    console.log(valor)

  }

}
