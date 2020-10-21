import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CurrencyOverviewComponent } from './components/overview/currency-overview.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [{
  path: '',
  component: CurrencyOverviewComponent
}];

@NgModule({
  declarations: [
    CurrencyOverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class CurrencyOverviewModule { }
