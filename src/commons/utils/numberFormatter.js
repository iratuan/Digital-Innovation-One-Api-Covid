export default function numberFormatter(number) {
  return new Intl.NumberFormat("pt-BR").format(number);
}
