export default function moneyFormatter(number) {
  let formatter = new Intl.NumberFormat([], {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(number);
}
