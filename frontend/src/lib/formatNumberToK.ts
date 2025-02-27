export default function formatNumberToK(number: number) {
  return number >= 1000 ? `${number / 1000}k` : `${number}`;
}
