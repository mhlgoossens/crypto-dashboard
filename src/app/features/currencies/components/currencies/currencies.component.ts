import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  // TK should this be like an interface?
  currencies: { name: string, base: string, fiat: string }[] = [
    {
      name: 'Bitcoin',
      base: 'BTC',
      fiat: 'USD'
    },
    {
      name: 'LiteCoin',
      base: 'LTC',
      fiat: 'USD'
    },
    {
      name: 'Ethereum',
      base: 'ETH',
      fiat: 'USD'
    }
  ]

  // TK typing?
  cryptoBase: string[] = [
    'BTC',
    'LTC',
    'ETH',
    'XRP'
  ]

  fiat: string[] = [
    'EUR',
    'USD',
    ''
  ]

  selectedCrytpo: string = 'LTC'

  constructor() { }

  ngOnInit() {

  }
}
