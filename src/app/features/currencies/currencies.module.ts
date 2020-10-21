import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrenciesComponent } from './components/currencies/currencies.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: CurrenciesComponent
}];

@NgModule({
  declarations: [
    CurrenciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class CurrenciesModule { }
