const fetchCoinPrice = async (coinName) => {
  const fetchData = await fetch(
    `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );
  const data = await fetchData.json();

  const usdCoinPrice = data?.market_data?.current_price.usd;
  return usdCoinPrice;
};

const fetchBNBPrice = async () => {
  const fetchData = await fetch(
    `https://api.coingecko.com/api/v3/coins/binancecoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );
  const data = await fetchData.json();

  const usdCoinPrice = data?.market_data?.current_price.usd;
  return usdCoinPrice;
};

const fetchETHPrice = async () => {
  const fetchData = await fetch(
    `https://api.coingecko.com/api/v3/coins/ethereum?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );
  const data = await fetchData.json();

  const usdCoinPrice = data?.market_data?.current_price.usd;
  return usdCoinPrice;
};

const fetchMATICPrice = async () => {
  const fetchData = await fetch(
    `https://api.coingecko.com/api/v3/coins/matic-network?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );
  const data = await fetchData.json();

  const usdCoinPrice = data?.market_data?.current_price.usd;
  return usdCoinPrice;
};

const getUserBalance = async (address, chain) => {
  let chainName;
  // FIXME: switch for testnet
  switch (chain) {
    case "binancecoin":
      chainName = "bsc%20testnet";
      break;
    case "ethereum":
      chainName = "goerli";
      break;
    case "matic-network":
      chainName = "mumbai";
      break;
    default:
      break;
  }

  // FIXME: switch for mainnet
  // switch (chain) {
  //   case "binancecoin":
  //     chainName = "bsc";
  //     break;
  //   case "ethereum":
  //     chainName = "eth";
  //     break;
  //   case "matic-network":
  //     chainName = "polygon";
  //     break;
  //   default:
  //     break;
  // }

  const fetchData = await fetch(
    `https://deep-index.moralis.io/api/v2/${address}/balance?chain=${chainName}`,
    {
      headers: {
        "X-API-Key":
          "VVB17etmpQAJzI83zMMeIu0VkAdtW8HSYBHJaPOe1V1tf6fzTZg8hjDznXrbSC8a",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const data = await fetchData.json();
  console.log("Chain name:", chainName);
  console.log("Chain balance:", data.balance);
  return data.balance;
};

export {
  fetchCoinPrice,
  fetchBNBPrice,
  fetchETHPrice,
  fetchMATICPrice,
  getUserBalance,
};
