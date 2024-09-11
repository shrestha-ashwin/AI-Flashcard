export default function convertToSubCurrency(amount = 0, factor = 100) {
  return Math.round(amount * factor);
}
