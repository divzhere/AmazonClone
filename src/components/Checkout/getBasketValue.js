export function getBasketValue(basket) {
  let total = 0;
  for (let item of basket) {
    total = total + item.price;
  }
  return total;
}
