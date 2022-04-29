import axios from "axios";

const cache: { [key: string]: number } = {};

export const loadTokenPrices = async () => {
    const url = "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin,busd&vs_currencies=usd";
    const { data } = await axios.get(url);

    cache["WBNB"] = data["binancecoin"].usd;
    cache["BUSD"] = data["busd"].usd * 100;
};

export const getTokenPrice = (symbol: string): number => {
    return Number(cache[symbol]);
};
