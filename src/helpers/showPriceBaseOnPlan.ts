export function showPriceBaseOnPlan(
  yearlyPlan: boolean,
  price: number
): string {
  const monthInYear = 10;
  const planIncrementor = yearlyPlan ? monthInYear : 1;
  const unit_short = yearlyPlan ? "yr" : "mo";

  const showPrice = (price: number) => {
    const calculatedPrice = planIncrementor * price;
    return `+$${calculatedPrice}/${unit_short}`;
  };

  return showPrice(price);
}
