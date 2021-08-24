export function priceFormatter(price?: number | string) {
  if (price) {
    return new Intl.NumberFormat().format(Number(price)) + ' UZS'
  }

  return 0
}
