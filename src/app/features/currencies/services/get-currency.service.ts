import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrencyResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GetCurrencyService {
  private apiUrl = 'https://api.coinbase.com/v2';

  constructor(private http: HttpClient) {}

  // https://api.coinbase.com/v2/exchange-rates?currency=BTC
  getCurrency(crypto: string): Observable<object> {
    return this.http
      .get(`${this.apiUrl}/exchange-rates?currency=${crypto}`)
      .pipe(map((res: CurrencyResponse) => res.data.rates));
  }
}
