import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Punto2Service } from 'src/app/service/punto2/punto2.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component{

  emailCliente !: string;
  resultado !: string;
  moneda!: string;
  de!: string;
  a!: string;
  conversion!:string;
  currencies!: Array<any>;
  constructor(private punto2Service: Punto2Service) {
  }

  convertir(a: string, de: string, valor: string){
    this.punto2Service.postConvertidor(a,de,valor).subscribe(
      result=>{
        this.resultado = result.result;

        this.punto2Service.postAltaTransaccion(this.de, this.a, this.moneda,this.resultado, this.emailCliente).subscribe(
          result => {
            console.log(result);
          },
          error => {
            console.log(error);
          }
        )
        console.log(result)
        this.conversion=result.result;
      }
    )
  }
  list(){
    this.punto2Service.getListCurrency().subscribe(
      result=>{
        console.log(result)
        this.currencies=result.currencies;

      }
    )
  }
  
}
