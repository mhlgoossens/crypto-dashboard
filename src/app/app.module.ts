import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { ProfileComponent } from './features/profile/profile.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

// ngx bootstrap
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './shared/alert/alert.component';
import { GetCurrencyService } from './features/currencies/services/get-currency.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
    PortfolioComponent,
    HeaderComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'currencies',
        loadChildren: () => import('./features/currencies/currencies.module').then(m => m.CurrenciesModule)
      },
      {
        path: 'docs',
        loadChildren: () => import('./features/docs/docs.module').then(m => m.DocsModule)
      },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
    AppRoutingModule
  ],
  providers: [GetCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
