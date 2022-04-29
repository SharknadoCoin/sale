import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import BusdIcon from "../../assets/tokens/busd.png";
import SharkoIcon from "../../assets/tokens/sharko.png";
import WbnbIcon from "../../assets/tokens/BNB.png";
import SharkoBnbIcon from "../../assets/tokens/SHARKO-BNB.png";
import SharkoBusdIcon from "../../assets/tokens/SHARKO-BUSD.png";

import { StableBondContract, LpBondContract, customBond, customBondV2, customTreasury, WavaxBondContract, StableReserveContract, LpReserveContract, wbnbBondV2 } from "../../abi";

export const busd = new StableBond({
    name: "BUSD",
    displayName: "BUSD",
    bondToken: "BUSD",
    bondIconSvg: BusdIcon,
    bondContractABI: customBondV2,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        },
    },
    tokensInStrategy: "1000000000000000000000000",
});

export const wbnb = new CustomBond({
    name: "WBNB",
    displayName: "BNB",
    bondToken: "WBNB",
    bondIconSvg: WbnbIcon,
    bondContractABI: wbnbBondV2,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "0x0C783f23108AA4357e999f4Cc389f84c2DA7A9d0",
            reserveAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        },
    },
    tokensInStrategy: "1000000000000000000000000",
});

export const bnbSHARKO = new CustomLPBond({
    name: "BNB-SHARKO LP",
    displayName: "BNB-SHARKO LP",
    bondToken: "BNB-SHARKO LP",
    bondIconSvg: SharkoBnbIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "0x4FcB4716Bd4784eE72746f89f2425a16f8C76595",
        },
    },
    lpUrl: "",
});

export default [/* busd, */ wbnb /*, bnbSHARKO */];
