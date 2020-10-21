import { Component, OnInit } from '@angular/core';
import { GetCurrencyService } from '../../services/get-currency.service';
import { Currency } from '../currency/currency.model';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
