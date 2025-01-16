export const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case "USD":
      return "$";
    case "usd":
      return "$";
    case "EUR":
      return "€";
    case "eur":
      return "€";
    case "GBP":
      return "£";
    case "gbp":
      return "£";
    case "INR":
      return "₹";
    case "inr":
      return "₹";
    default:
      return currency;
  }
};
