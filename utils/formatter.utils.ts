export const moneyFormatter = (value: number) =>
  Intl.NumberFormat('de-CH', {
    style: 'currency',
    currency: 'CHF',
  }).format(value)
