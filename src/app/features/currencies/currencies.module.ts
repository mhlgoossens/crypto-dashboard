import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrenciesComponent } from './components/currencies/currencies.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './components/currency/currency.component';
import { SelectCurrencyComponent } from './components/select-currency/select-currency.component';

const routes: Routes = [{
  path: '',
  component: CurrenciesComponent
}];

@NgModule({
  declarations: [
    CurrenciesComponent,
    CurrencyComponent,
    SelectCurrencyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class CurrenciesModule { }
