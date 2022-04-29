import { SvgIcon } from "@material-ui/core";
import { ReactComponent as MimImg } from "../assets/tokens/MIM.svg";
import BusdIcon from "../assets/tokens/busd.png";
import BnbIcon from "../assets/tokens/BNB.png";
import SharkoLPIcon from "../assets/tokens/SharkoLP.png";

import { IAllBondData } from "../hooks/bonds";
import { wbnb, bnbSHARKO, busd } from "../helpers/bond";

export const priceUnits = (bond: IAllBondData) => {
    if (bond.name === wbnb.name /* busd.name */) return <img src={BnbIcon} style={{ height: "15px", width: "15px" }} />;
    if (bond.name === busd.name) return <img src={BusdIcon} style={{ height: "15px", width: "15px" }} />;
    else if (bond.name === bnbSHARKO.name) return <img src={SharkoLPIcon} style={{ height: "15px", width: "15px" }} />;
    //<SvgIcon component={MimImg} viewBox="0 0 32 32" style={{ height: "15px", width: "15px" }} />;

    return "$";
};
