import axios from "axios";

export const getCoinPrice = (id, days, Pricetype, setError) => {
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (response.data) {
        console.log("Prices>>>", response.data);
        if (Pricetype == "market_caps") {
          return response.data.market_caps;
        } else if (Pricetype == "total_volumes") {
          return response.data.total_volumes;
        } else {
          return response.data.prices;
        }
      }
    })
    .catch((e) => {
      console.log(e.message);
      if (setError) {
        setError(true);
      }
    });

  return prices;
};