import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas', //nombre del pipe
})
export class MayusculasPipe implements PipeTransform{

    transform(valor:string, enMayusculas:boolean = true):string{
        return (enMayusculas) 
            ? valor.toUpperCase()
            : valor.toLowerCase();
    }

}