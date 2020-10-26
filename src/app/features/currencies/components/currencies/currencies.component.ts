import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  // TK should this be like an interface?
  // TK should I store this elsewhere?
  cryptos: { name: string, base: string, fiat: string }[] = [
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
      name: 'Ripple',
      base: 'XRP',
      fiat: 'USD'
    },
    {
      name: 'Ethereum',
      base: 'ETH',
      fiat: 'USD'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
