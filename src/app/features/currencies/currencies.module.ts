import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrenciesComponent } from './components/currencies/currencies.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './components/currency/currency.component';

const routes: Routes = [{
  path: '',
  component: CurrenciesComponent
}];

@NgModule({
  declarations: [
    CurrenciesComponent,
    CurrencyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class CurrenciesModule { }
