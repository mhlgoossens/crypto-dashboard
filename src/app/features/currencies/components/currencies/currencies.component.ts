import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  currencies: { name: string, base: string, currency: string }[] = [
    {
      name: 'Bitcoin',
      base: 'BTC',
      currency: 'USD'
    },
    {
      name: 'LiteCoin',
      base: 'LTC',
      currency: 'USD'
    },
    {
      name: 'Bitcoin',
      base: 'BTC',
      currency: 'USD'
    },
  ]
  constructor() { }

  ngOnInit() {

  }
}
