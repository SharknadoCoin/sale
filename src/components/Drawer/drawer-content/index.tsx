import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import StakeIcon from "../../../assets/icons/stake.svg";
import BondIcon from "../../../assets/icons/bond.svg";
import SharknadoIcon from "../../../assets/icons/sharknado-nav-header.png";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/stake.svg";
import GlobeIcon from "../../../assets/icons/wonderglobe.svg";
import classnames from "classnames";
import useZaps from "../../../hooks/zaps";

function NavContent() {
    const [isActive] = useState();
    const address = useAddress();
    const { bonds } = useBonds();
    const { zaps } = useZaps();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        /* if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        } */ /* 
        if (currentPath.indexOf("stake") >= 0 && page === "stake") {
            return true;
        } */
        if (currentPath.indexOf("sale") >= 0 && page === "sale") {
            return true;
        }
        if (currentPath.indexOf("zap") >= 0 && page === "zap") {
            return true;
        } /* 
        if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
            return true;
        } */
        return false;
    }, []);

    return (
        <div className="dapp-sidebar">
            <div className="branding-header">
                <Link href="https://sharknado.io" target="_blank">
                    <img alt="" src={SharknadoIcon} />
                </Link>

                {address && (
                    <div className="wallet-link">
                        <Link href={`https://bscscan.com/address/${address}`} target="_blank">
                            <p>{shorten(address)}</p>
                        </Link>
                    </div>
                )}
            </div>

            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    {/* <Link
                        component={NavLink}
                        to="/dashboard"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "dashboard");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={DashboardIcon} />
                            <p>Dashboard</p>
                        </div>
                    </Link> */}

                    {/* <Link
                        component={NavLink}
                        to="/stake"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "stake");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={StakeIcon} />
                            <p>Stake</p>
                        </div>
                    </Link> */}

                    <Link id="bond-nav" href="https://swap.sharknado.io/" target="_blank" className={classnames("button-dapp-menu")}>
                        <div className="dapp-menu-item">
                            <img alt="" src={DashboardIcon} />
                            <p>Exchange</p>
                        </div>
                    </Link>
                    <div className="bond-discounts">
                        <Link href="https://swap.sharknado.io/swap" target="_blank">
                            <p>Swap</p>
                        </Link>
                        <Link href="https://swap.sharknado.io/liquidity" target="_blank">
                            <p>Liquidity</p>
                        </Link>
                        <Link href="https://swap.sharknado.io/pools" target="_blank">
                            <p>Staking</p>
                        </Link>
                        <Link href="https://play.sharknado.io/" target="_blank">
                            <p>Prize</p>
                        </Link>
                    </div>

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/zap"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "zap");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={GlobeIcon} />
                            <p>Zap (LP)</p>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/sale"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "sale");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={BondIcon} />
                            <p>SALE (Coming Soon!)</p>
                        </div>
                    </Link>

                    <div className="bond-discounts">
                        {/* <p>Estimated ROI %</p> */}
                        {bonds.map((bond, i) => (
                            <Link component={NavLink} to={`/sale/${bond.name}`} key={i} className={"bond"}>
                                {!bond.bondDiscount ? (
                                    <Skeleton variant="text" width={"150px"} />
                                ) : (
                                    <p>
                                        {bond.displayName}
                                        <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* <div className="bond-discounts"> 
                            <Link href="https://swap.sharknado.io/" target="_blank">
                                    <p>SSS-BNB LP</p>
                            </Link>
                            <Link href="https://swap.sharknado.io/" target="_blank">
                                    <p>SEA-BNB LP</p>
                            </Link>


                        {zaps.map((bond, i) => (
                            <Link component={NavLink} to={`/sale/${bond.name}`} key={i} className={"bond"}>
                                {!bond.bondDiscount ? (
                                    <Skeleton variant="text" width={"150px"} />
                                ) : (
                                    <p>
                                        {bond.displayName}
                                        <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div> */}

                    {/* <Link
                        component={NavLink}
                        to="/calculator"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "calculator");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={GlobeIcon} />
                            <p>Calculator</p>
                        </div>
                    </Link> */}
                </div>
            </div>
            <div className="dapp-menu-doc-link">
                <Link href="https://docs.sharknado.io/" target="_blank">
                    <img alt="" src={DocsIcon} />
                    <p>Docs</p>
                </Link>
                <Link href="https://sharknado.io/" target="_blank">
                    <p>Back to homepage</p>
                </Link>
            </div>
            <Social />
        </div>
    );
}

export default NavContent;
