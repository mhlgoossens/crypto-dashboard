import { Component, OnInit } from '@angular/core';
import { GetCurrencyService } from '../../services/get-currency.service';
import { Currency } from './currency.model';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  // currency$: Object;
  currency$;

  constructor(private getCurrencyService: GetCurrencyService) { }

  // removed type : void from ngOnInit
  ngOnInit() {
    return this.currency$ = this.getCurrencyService.getCurrency();
    // return this.getCurrencyService.getCurrency().subscribe(data => this.currency$ = data.data && console.log(data.data));
    
  }

}
