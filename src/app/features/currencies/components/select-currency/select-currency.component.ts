import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { GetCurrencyService } from '../../services/get-currency.service';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss']
})
export class SelectCurrencyComponent implements OnInit {
  @Input() currencies;
  @Input() cryptoBase;
  @Input() selectedCrypto;

  // to be typed
  fiats$;
  currencyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private getCurrencyService: GetCurrencyService
    ) { }

  ngOnInit(): void {
    this.currencyForm = this.fb.group({
      currency: ['BTC'],
      fiat: ['USD'],
    })
    // TK als ik deze functie aanroep als die niet in de return staat, dan zou die toch wel gewoon moeten loggen? dat is niet het geval; de functie logt pas als ik die in de return zet
    // this.getCurrencyService.getCurrency('BTC');
    this.fiats$ = this.currencyForm.get('currency').valueChanges.pipe(
      startWith('BTC'),
      switchMap(fiat => this.getCurrencyService.getCurrency(fiat)),
      tap(data => console.log(data)
      )
    )
    this.getCurrencyService.getCurrencies('currencies');
    // this.fiats$ = this.getCurrencyService.getCurrencies('currencies');
    // this.getCurrencyService.getCurrency('BTC').subscribe(res => console.log(res));
  }

}
 