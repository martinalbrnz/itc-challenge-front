export const priceFormatter = (price) => {
  const dolarFormat = new Intl.NumberFormat("en-US", { style: 'currency', currency: 'USD'});
  return dolarFormat.format(price);
};
