import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import BusdIcon from "../../assets/tokens/busd.png";
import SharkoIcon from "../../assets/tokens/sharko.png";
import WbnbIcon from "../../assets/tokens/BNB.png";
import SharkoBnbIcon from "../../assets/tokens/SHARKO-BNB.png";
import SharkoBusdIcon from "../../assets/tokens/SHARKO-BUSD.png";

import { StableBondContract, LpBondContract, customBond, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

/* export const busd = new CustomBond({
    name: "BUSD",
    displayName: "BUSD",
    bondToken: "BUSD",
    bondIconSvg: BusdIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {C
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    tokensInStrategy: "1000000000000000000000000",
}); */

export const wbnb = new StableBond({
    name: "WBNB",
    displayName: "WBNB",
    bondToken: "WBNB",
    bondIconSvg: WbnbIcon,
    bondContractABI: customBond,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    tokensInStrategy: "1000000000000000000000000",
});

/* export const busdSHARKO = new LPBond({
    name: "BUSD-SHARKO LP",
    displayName: "BUSD-SHARKO LP",
    bondToken: "BUSD-SHARKO LP",
    bondIconSvg: SharkoBusdIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.BSC]: {
            bondAddress: "",
            reserveAddress: "",
        },
    },
    lpUrl: "",
}); */

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
            reserveAddress: "",
        },
    },
    lpUrl: "",
});

export default [/* busd, */ wbnb, /* wavax2, */ /* busdSHARKO, */ bnbSHARKO];
