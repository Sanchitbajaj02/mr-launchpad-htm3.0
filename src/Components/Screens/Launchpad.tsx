import React, { useState, useEffect } from "react";
// import { DataContext } from "../../Utils/DataContext";
// import CountDown from "../CountDown";
import {
  fetchCoinPrice,
  fetchBNBPrice,
  fetchETHPrice,
  fetchMATICPrice,
  getUserBalance,
} from "../../Utils/api";
import { useMoralis, useWeb3Transfer, useChain } from "react-moralis";

import TokenLogo from "../../Assets/mr-token-logo.png";

const wei = 1000000000000000000;

const Launchpad = () => {
  // const context = useContext(DataContext);

  const { authenticate, Moralis, isAuthenticated, logout } = useMoralis();
  const { chainId } = useChain();

  const [coinData, setCoinData] = useState({
    amount: 0,
    a4r_token: 0,
    coin_price: 0,
    chainName: "",
    chainAmount: 1,
    userAddress: "",
    userBalance: -1,
  });

  const [chainPrice, setChainPrice] = useState({
    bnb: "",
    eth: "",
    matic: "",
  });

  // method to fetch data from apis
  const getRealTimePriceOFTokens = async () => {
    const ethPrice = await fetchETHPrice();
    const bnbPrice = await fetchBNBPrice();
    const maticPrice = await fetchMATICPrice();
    setChainPrice({
      ...chainPrice,
      bnb: bnbPrice,
      eth: ethPrice,
      matic: maticPrice,
    });
  };

  useEffect(() => {
    // add your logic here
    if (isAuthenticated) {
      getRealTimePriceOFTokens();
      showCoinBalanceInCurrentChain();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const getValueFromChainID = (chain_name: string) => {
    // FIXME: Testnet
    switch (chain_name) {
      case "binancecoin":
        return "0x61";
      case "ethereum":
        return "0x5";
      case "matic-network":
        return "0x13881";
      default:
        return "NULL";
    }

    // FIXME: Mainnet
    // switch (chain_name) {
    //   case "binancecoin":
    //     return "0x38";
    //   case "ethereum":
    //     return "0x1";
    //   case "matic-network":
    //     return "0x89";
    //   default:
    //     return "NULL";
    // }
  };

  // TODO: the program for login
  const login = async () => {
    if (!isAuthenticated) {
      authenticate({
        signingMessage: "Welcome to MR Launchpad",
      })
        .then(async function (user) {
          // console.log("logged in user:", user);
          let address: string = user!.get("ethAddress");

          setCoinData({
            ...coinData,
            userAddress: address.toString(),
          });
        })
        .catch(function (error) {
          // console.error(error);
          alert("Metamask not found");
        });
    }
  };

  // TODO: the program for logout
  const logOut = async () => {
    await logout();

    setCoinData({
      ...coinData,
      userAddress: "",
    });
    window.location.reload();
    // console.log("logged out");
  };

  // TODO: the program to change the chain name
  const onChangeChainNet = async (e: { target: any }) => {
    // console.log(e.target.value);

    const output = await fetchCoinPrice(e.target.value);
    // console.log("chain amount:", output);

    let chainAmountInt = Number(output);
    let newPriceBTC = coinData.amount / chainAmountInt;

    let distributionPrice = newPriceBTC * 0.1 + newPriceBTC;
    distributionPrice = Number(distributionPrice.toFixed(6));

    let userBalance = await getUserBalance(
      coinData.userAddress,
      e.target.value
    );
    // console.log(userBalance / wei);
    let weiUserBalance = userBalance / wei;
    weiUserBalance = Number(weiUserBalance.toFixed(6));

    setCoinData({
      ...coinData,
      chainName: e.target.value,
      chainAmount: output,
      coin_price: distributionPrice,
      userBalance: weiUserBalance,
    });
  };

  // console.log("coindata: ", coinData);

  // TODO: the program to add the amount
  const changeCoinData = async (e: { target: any }) => {
    let amount = e.target.value;
    let a4rValue = amount * 1000;

    let chainAmountInt = Number(coinData.chainAmount);
    let newPriceBTC = amount / chainAmountInt;

    let distributionPrice = newPriceBTC * 0.1 + newPriceBTC;
    distributionPrice = Number(distributionPrice.toFixed(6));

    setCoinData({
      ...coinData,
      amount: Number(amount),
      a4r_token: a4rValue,
      coin_price: distributionPrice,
    });
  };

  // TODO: moralis program to transfer coin
  const dataOptions: any = {
    type: "native",
    amount: Moralis.Units.ETH(coinData.coin_price ? coinData.coin_price : 0),
    receiver: process.env.REACT_APP_RECEIVER_ADDRESS_DEV,
  };
  const { fetch, error, isFetching } = useWeb3Transfer(dataOptions);

  // TODO: program triggers when buy button is clicked
  const submitTransfer = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (coinData.amount < 1 || coinData.amount > 10000) {
      alert("Balance is out of range");
    } else if (coinData.chainName === "") {
      alert("Please Choose the appropiate chain");
      console.log(error);
    } else if (coinData.userBalance < coinData.coin_price) {
      alert("Insufficient balance in wallet");
    } else if (getValueFromChainID(coinData.chainName) !== chainId) {
      alert("Wrong Mainnet-Chain selected. Please change into Metamask Wallet");
    } else {
      try {
        const result = await fetch();
        // console.log(result);

        if (result !== undefined) {
          await saveData().then((data) => console.log(data));
        } else {
          alert("Transaction failed, please try again.");
        }
      } catch (error) {
        alert("Transaction failed");
        console.warn(error);
      }
    }
  };

  const saveData = async () => {
    const TransactionTable = await Moralis.Object.extend("Transaction_table");

    const tnx = new TransactionTable();
    tnx.set("user_address", coinData.userAddress);
    tnx.set("usd_amount", coinData.amount);
    tnx.set("chain_total_amount", coinData.coin_price);
    tnx.set("tokens_given", coinData.a4r_token);
    tnx.set("chain_name", coinData.chainName);

    // console.log(tnx);
    // console.log(coinData.userAddress);
    await tnx.save();
  };

  const walletAddressLengthReducer = (address: string) => {
    if (address !== "") {
      let addressStart = address.substring(0, 4);
      let addressEnd = address.substring(38);
      return `${addressStart}...${addressEnd}`;
    } else {
      return "";
    }
  };

  const selectChainName = () => {
    if (coinData.chainName === "binancecoin") {
      return "BNB";
    } else if (coinData.chainName === "ethereum") {
      return "ETH";
    } else if (coinData.chainName === "matic-network") {
      return "MATIC";
    }
  };
  const showCoinBalanceInCurrentChain = () => {
    if (coinData?.chainName === "" && coinData?.userBalance === -1) {
      return (
        <span className="font-semibold text-red-600">chain not selected</span>
      );
    } else {
      if (coinData?.userBalance === 0) {
        return <span>0</span>;
      } else {
        return <span>{coinData?.userBalance}</span>;
      }
    }
  };

  return (
    <>
      <nav className="max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between items-center">
          <a className="navbar-brand" href="/">
            <img src={TokenLogo} alt="MR token" width="70" />
          </a>

          <div className="wallet-flex ms-auto">
            {coinData?.userAddress ? (
              <>
                <div className="wallet-address-user">
                  {walletAddressLengthReducer(coinData?.userAddress)}
                </div>
              </>
            ) : null}
            <div>
              {isAuthenticated ? (
                <button
                  onClick={logOut}
                  className="border-2 border-lime-600 text-lime-600 text-md py-2 px-4 rounded-sm font-semibold cursor-pointer hover:bg-lime-600 hover:text-white transition-all duration-300">
                  Logout
                </button>
              ) : (
                <button
                  onClick={login}
                  className="border-2 border-lime-600 text-lime-600 text-md py-2 px-4 rounded-sm font-semibold cursor-pointer hover:bg-lime-600 hover:text-white transition-all duration-300">
                  Connect Metamask Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <section className="px-4 md:px-0 md:max-w-screen-xl m-auto">
        <article className="my-12 text-center">
          <h1 className="font-bold text-5xl text-red-600">
            Manav Rachna <span className="text-green-600">Coin</span>
          </h1>
        </article>

        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <div className="mb-8">
              <h2 className="text-white text-3xl font-semibold mb-4">
                INSTRUCTIONS
              </h2>
              <p className="text-gray text-lg">
                We are currently supporting Metamask wallet. Ensure to create an
                account or import an account on metamask wallet.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-white text-3xl font-semibold mb-4">
                A4R TOKEN TOKENOMICS
              </h2>
              <p className="text-gray text-lg">
                Token Name - A4R Fitness Lifestyle Token <br />
                Token Symbol - A4R <br />
                Token Total Supply - 100,000,000,000 <br />
                Available Token for Sell - 100,000,000 <br />
                Current Price of A4R Token - 1A4R = $0.001 <br />
                Token Network - BSC <br />
                Token Distribution - After the end of token sale <br />
                Token Distribution Cost - 10% of token price included <br />
              </p>
            </div>
          </div>
          <div className="bg-dark-gray p-8 mb-4">
            <h2 className="text-white text-3xl font-semibold mb-4">
              BUY A4R TOKENS
            </h2>

            <form onSubmit={submitTransfer} className="needs-validation">
              <div className="mb-6">
                <label htmlFor="amount" className="block text-md text-gray">
                  Enter amount equivalent to USD($)
                </label>

                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="mt-1 px-3 py-2 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 block w-full rounded-md sm:text-sm focus:ring-1 field-color"
                  placeholder="Example: $100"
                  required={true}
                  max={10000}
                  min={1}
                  onChange={changeCoinData}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="chain" className="block text-md text-gray">
                  Choose the chain of token to buy
                </label>
                <select
                  name="chain"
                  id="chain"
                  className="mt-1 px-3 py-2 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 block w-full rounded-md sm:text-sm focus:ring-1 field-color"
                  onChange={onChangeChainNet}
                  required
                  defaultValue="default">
                  <option value="default" disabled>
                    choose
                  </option>
                  <option value="binancecoin">
                    Binance Chain (Buy using BNB)
                  </option>
                  <option value="ethereum">
                    Etherum Chain (Buy using ETH)
                  </option>
                  <option value="matic-network">
                    Polygon Chain (Buy using MATIC)
                  </option>
                </select>

                <p className="text-gray my-3">
                  <span className="font-semibold text-red-600">Note:</span>{" "}
                  Ensure the Mainnet chosen in wallet(Metamask wallet only)
                  matches with above dropdown Mainnet
                </p>
                {isAuthenticated ? (
                  <>
                    <p className="text-white m-0">Current Price of Coins:-</p>
                    <div className="flex justify-between my-4">
                      <p className=" text-white">BNB: ${chainPrice?.bnb}</p>
                      <p className=" text-white">ETH: ${chainPrice?.eth}</p>
                      <p className=" text-white">MATIC: ${chainPrice?.matic}</p>
                    </div>

                    <p className="text-white ">
                      Current balance in{" "}
                      {selectChainName() ? selectChainName() : ""} Mainnet:
                      {"  "}
                      <span>
                        {/* {coinData.userBalance ? (
                            coinData.userBalance
                          ) : (
                            <span className="text-danger">
                              chain not selected
                            </span>
                          )} */}
                        {showCoinBalanceInCurrentChain()}
                      </span>
                    </p>
                  </>
                ) : null}
              </div>

              <div className="mb-6 ">
                <label htmlFor="coin_price" className="block text-md text-gray">
                  Number of {selectChainName() ? selectChainName() : "-"} tokens
                  deduct from your wallet
                </label>
                <input
                  type="text"
                  name="coin_price"
                  id="coin_price"
                  className="mt-1 px-3 py-2 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 block w-full rounded-md sm:text-sm focus:ring-1 field-color"
                  style={{ backgroundColor: "#272727" }}
                  required={true}
                  value={coinData?.chainName ? coinData?.coin_price : "-"}
                  disabled
                />
              </div>

              <div className="mb-3">
                <label htmlFor="a4r_token" className="block text-md text-gray">
                  A4R Token (1A4R = $0.001)
                </label>
                <input
                  type="text"
                  name="a4r_token"
                  id="a4r_token"
                  className="mt-1 px-3 py-2 shadow-sm focus:outline-none focus:border-sky-100 focus:ring-sky-100 block w-full rounded-md sm:text-sm focus:ring-1 field-color"
                  style={{ backgroundColor: "#272727" }}
                  required={true}
                  value={coinData?.a4r_token}
                  disabled
                />
              </div>

              <div className="mt-3">
                <input
                  type="submit"
                  name="submit"
                  value={"Buy Token"}
                  className="border-2 border-lime-600 text-lime-600 text-xl w-full py-3 rounded-sm font-semibold cursor-pointer hover:bg-lime-600 hover:text-white transition-all duration-300"
                  disabled={!isAuthenticated || isFetching}
                />
              </div>
            </form>
          </div>
        </div>
        {/* {error && (
          <>
            <span className="text-white">{error.message}</span>
          </>
        )} */}
      </section>

      {/* <Table address={coinData?.userAddress ? coinData?.userAddress : "0"} /> */}

      <div id="copyright">
        <p className="m-0 p-0">
          Copyright © 2022 MR Coin. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Launchpad;
