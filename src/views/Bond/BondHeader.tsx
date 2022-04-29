import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import BondLogo from "../../components/BondLogo";
import AdvancedSettings from "./AdvancedSettings";
import { IconButton, SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import { useEscape } from "../../hooks";
import { IAllBondData } from "../../hooks/bonds";
import DocsIcon from "../../assets/icons/stake.svg";

interface IBondHeaderProps {
    bond: IAllBondData;
    slippage: number;
    onSlippageChange: (e: any) => void;
}

function BondHeader({ bond, slippage, onSlippageChange }: IBondHeaderProps) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let history = useHistory();

    useEscape(() => {
        if (open) handleClose;
        else history.push("/sale");
    });

    return (
        <div className="bond-header">
            <Link component={NavLink} to="/sale" className="cancel-bond">
                <SvgIcon color="primary" component={XIcon} />
            </Link>

            <div className="bond-header-logo">
                <BondLogo bond={bond} />
                <div className="bond-header-name">
                    <p>{bond.displayName}</p>
                </div>
            </div>

            <div className="bond-settings">
                <Link href="https://sharknadocoin.medium.com/sharko-token-initial-sale-announcement-8ecfd729f245" target="_blank">
                    <img alt="" src={DocsIcon} />
                </Link>
                {/* <IconButton onClick={handleOpen}>
                    <SvgIcon color="primary" component={SettingsIcon} />
                </IconButton>
                <AdvancedSettings open={open} handleClose={handleClose} slippage={slippage} onSlippageChange={onSlippageChange} /> */}
            </div>
        </div>
    );
}

export default BondHeader;
