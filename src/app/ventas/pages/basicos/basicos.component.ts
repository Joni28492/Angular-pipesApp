import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower:string='joni'
  nombreUpper:string='JONI'
  nombreCompleto:string='JOnI feRnAndez'


  fecha:Date = new Date();//dia de hoy


}
