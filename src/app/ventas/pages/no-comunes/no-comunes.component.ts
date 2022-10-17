import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {


  //i18nSelect
  nombre:string='Nerea';
  genero:string='femenino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando']
  clientesMapa={
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 cleintes esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarPersona(){
     (this.nombre==='Nerea') ? this.nombre ='Joni':this.nombre ='Nerea';
     (this.genero === 'femenino') ? this.genero = 'masculino':this.genero='femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }


  //Key Value Pipe
  persona={
    nombre: 'Joni',
    edad: 30,
    direccion:'Asturias, España'
  }

  //Json Pipe
  heroes = [
    {
      nombre:'Superman',
      vuela:true,
    },
    {
      nombre:'Robin',
      vuela:false,
    },
    {
      nombre:'Aquaman',
      vuela:false,
    },
  ]

  //Assync Pipe
  //interval de rxjs
  miObservable =interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{

    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);

  })

}
