import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private getCurrencyService: GetCurrencyService) { }

  ngOnInit(): Observable<any> {
    return this.currency$ = this.getCurrencyService.getCurrency(this.currency.base, this.currency.fiat);
  }

}
