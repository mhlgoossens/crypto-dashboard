import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CurrencyResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyService {
  private apiUrl = 'https://api.coinbase.com/v2/prices';

  constructor(private _http: HttpClient) { }

  getCurrency (base: string, fiat: string): Observable<string> {
    return this._http.get(`${this.apiUrl}/${base}-${fiat}/spot`)
      .pipe(
        tap((res:CurrencyResponse) => console.log(res)),
        map((res:CurrencyResponse) => res.data.amount))
  }
}
