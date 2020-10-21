import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCurrencyService {
  apiUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/spot';

  // why the underscore?
  constructor(private _http: HttpClient) { }

  // let btcusd = this.http.get("https://api.coinbase.com/v2/prices/BTC-USD/spot");
  // btcusd.subscribe( data => console.log(data))
  getCurrency () {
    return this._http.get(this.apiUrl).pipe(map(res => res['data']['amount']));
  }
}
