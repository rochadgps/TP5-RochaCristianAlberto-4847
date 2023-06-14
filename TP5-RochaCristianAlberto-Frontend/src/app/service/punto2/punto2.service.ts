import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Punto2Service {

  constructor(private _http: HttpClient) { }

  postConvertidor(a: string, de: string, valor: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '047cbff43cmsh14b9926fa56071dp13aab8jsna1cb0eaa1bf8',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
    }
    const body = new HttpParams()
      .set('from-value', valor)
      .set('from-type', de)
      .set('to-type', a);
    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', body, httpOptions);
  }

  getListCurrency(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '047cbff43cmsh14b9926fa56071dp13aab8jsna1cb0eaa1bf8',
        'X-RapidAPI-Host': 'currency-converter219.p.rapidapi.com'
      }),
    }
    return this._http.get('https://currency-converter219.p.rapidapi.com/currencies',httpOptions);
  }
  
  public postAltaTransaccion(monedaOrigen: string, monedaDestino: string, cantidadOrigen: string,cantidadDestino : string, emailCliente : string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    const tasaConversion =  parseFloat(cantidadOrigen) /parseFloat(cantidadDestino) ;

    const data = {
      'monedaOrigen': monedaOrigen,
      'cantidadOrigen': cantidadOrigen,
      'monedaDestino': monedaDestino,
      'emailCliente': emailCliente,
      'tasaConversion': tasaConversion
    };

    var url = "http://localhost:3000/api/transaccion";

    return this._http.post(url, data, httpOptions);
  }


  public getMostrarTransaccionesTodas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/transaccion";

    return this._http.get(url, httpOptions);
  }

  public getMostrarTransaccionesOrigenDestino(origen : string, destino:string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };

    var url = "http://localhost:3000/api/transaccion/divisas?origen="+origen+"&destino="+destino;

    return this._http.get(url, httpOptions);
  }
}
