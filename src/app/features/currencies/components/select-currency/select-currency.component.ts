import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { startWith, switchMap, tap } from 'rxjs/operators';
import { GetCurrencyService } from '../../services/get-currency.service';

@Component({
  selector: 'app-select-currency',
  templateUrl: './select-currency.component.html',
  styleUrls: ['./select-currency.component.scss']
})
export class SelectCurrencyComponent implements OnInit {
  @Input() cryptos;
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
      crypto: ['BTC'],
      fiat: ['USD'],
    });

    this.fiats$ = this.currencyForm.get('crypto').valueChanges.pipe(
      startWith('BTC'),
      switchMap(fiat => this.getCurrencyService.getCurrency(fiat)),
      tap(data => console.log(data))
    );
  }
}
