import { Component, Input, OnInit } from '@angular/core';
import { GetCurrencyService } from '../../services/get-currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input() currency;

  // TK hier moet ik iets mee
  currency$;
  currencyYesterday$;

  constructor(private getCurrencyService: GetCurrencyService) { }

  ngOnInit(): void {
  }

}
