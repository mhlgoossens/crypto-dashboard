import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CurrencyResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyService {
  private apiUrl = 'https://api.coinbase.com/v2';

  constructor(private _http: HttpClient) { }

  // TK waarom mag dit een 'object' zijn, terwijl data een array is?
  // https://api.coinbase.com/v2/currencies
  getCurrencies (endpoint: string): Observable<Object> {
    return this._http.get(`${this.apiUrl}/${endpoint}`)
      .pipe((map(res => res['data'])))
  }

  // https://api.coinbase.com/v2/exchange-rates?currency=BTC
  getCurrency(crypto: string) {
    return this._http.get(`${this.apiUrl}/exchange-rates?currency=${crypto}`)
      .pipe(
        // tap(res => console.log(res)),
        map((res: CurrencyResponse) => res.data.rates))
  }

  // getCurrency (base: string, fiat: string, date?: string): Observable<string> {
  //   let dateParams = '';
  //   date ? dateParams = `?date=${date}` : dateParams;

  //   return this._http.get(`${this.apiUrl}/prices/${base}-${fiat}/spot${dateParams}`)
  //     .pipe(
  //       tap((res:CurrencyResponse) => console.log(res)),
  //       map((res:CurrencyResponse) => res.data.amount))
  // }
}
