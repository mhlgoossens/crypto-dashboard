// TK: hoe typeer ik een object waarvan ik wel de structuur weet (zoals rates),
// maar waarvan ik niet weet hoeveel strings erin zitten?
export interface CurrencyResponse {
  data: {
    currency: string,
    rates: {
      fiat: string
    }
  };
}
