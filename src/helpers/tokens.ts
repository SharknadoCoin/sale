import SssIcon from "../assets/tokens/SSS.png";
import BnbIcon from "../assets/tokens/BNB.png";
import SeaIcon from "../assets/tokens/SEA.png";
import UsdtEIcon from "../assets/tokens/USDT.e.png";
import WbnbIcon from "../assets/tokens/BNB.png";
import SharkoIcon from "../assets/tokens/sharko.png";
import YakIcon from "../assets/tokens/busd.png";

export interface IToken {
    name: string;
    address: string;
    img: string;
    isAvax?: boolean;
    decimals: number;
}

export const bnb: IToken = {
    name: "BNB",
    isAvax: true,
    img: BnbIcon,
    address: "",
    decimals: 18,
};
export const wbnb: IToken = {
    name: "WBNB",
    isAvax: true,
    img: WbnbIcon,
    address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", //testnet is busd
    decimals: 18,
};
export const sea: IToken = {
    name: "SEA",
    img: SeaIcon,
    address: "0x26193C7fa4354AE49eC53eA2cEBC513dc39A10aa", //0x26193C7fa4354AE49eC53eA2cEBC513dc39A10aa
    decimals: 18,
};
export const sss: IToken = {
    name: "SSS",
    img: SssIcon,
    address: "0xC3028FbC1742a16A5D69dE1B334cbce28f5d7EB3", //0xC3028FbC1742a16A5D69dE1B334cbce28f5d7EB3
    decimals: 18,
};

export const sharko: IToken = {
    name: "SHARKO",
    img: SharkoIcon,
    address: "0xCCe19525531dbd08A4dD75a7B092B32c7aA36b02", //0x7E1d65ee360335Fa119EE4B9708e47700EFBFc58
    decimals: 18,
};

export const usdt: IToken = {
    name: "USDT",
    address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", //0x55d398326f99059ff775485246999027b3197955
    img: UsdtEIcon,
    decimals: 18,
};

export const busd: IToken = {
    name: "BUSD",
    address: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", //0xe9e7cea3dedca5984780bafc599bd69add087d56
    img: YakIcon,
    decimals: 18,
};

export default [usdt, busd, bnb, sea, sss, sharko, wbnb];
