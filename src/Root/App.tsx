import { useEffect, useState, useCallback } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAddress, useWeb3Context } from "../hooks";
import { calcBondDetails } from "../store/slices/bond-slice";
import { calcBondDetailsZap } from "../store/slices/bond-slice-zap";
import { loadAppDetails } from "../store/slices/app-slice";
import { loadAccountDetails, calculateUserBondDetails, calculateUserTokenDetails } from "../store/slices/account-slice";
import { loadAccountDetailsZap, calculateUserBondDetailsZap, calculateUserTokenDetailsZap } from "../store/slices/account-slice-zap";
import { IReduxState } from "../store/slices/state.interface";
import Loading from "../components/Loader";
import useBonds from "../hooks/bonds";
import useZaps from "../hooks/zaps";
import ViewBase from "../components/ViewBase";
import { Stake, ChooseBond, Bond, Dashboard, NotFound, Calculator, Zap, ChooseZap, Landing } from "../views";
import "./style.scss";
import useTokens from "../hooks/tokens";

function App() {
    const dispatch = useDispatch();

    const { connect, provider, hasCachedProvider, chainID, connected } = useWeb3Context();
    const address = useAddress();

    const [walletChecked, setWalletChecked] = useState(false);

    const isAppLoading = useSelector<IReduxState, boolean>(state => state.app.loading);
    const isAppLoaded = useSelector<IReduxState, boolean>(state => !Boolean(state.app.marketPrice));

    const { bonds } = useBonds();
    const { zaps } = useZaps();
    const { tokens } = useTokens();

    async function loadDetails(whichDetails: string) {
        let loadProvider = provider;

        if (whichDetails === "app") {
            loadApp(loadProvider);
        }

        if (whichDetails === "account" && address && connected) {
            loadAccount(loadProvider);
            if (isAppLoaded) return;

            loadApp(loadProvider);
        }

        if (whichDetails === "userBonds" && address && connected) {
            bonds.map(bond => {
                dispatch(calculateUserBondDetails({ address, bond, provider, networkID: chainID }));
            });
        }

        if (whichDetails === "userZaps" && address && connected) {
            zaps.map(bond => {
                dispatch(calculateUserBondDetailsZap({ address, bond, provider, networkID: chainID }));
            });
        }

        if (whichDetails === "userTokens" && address && connected) {
            tokens.map(token => {
                dispatch(calculateUserTokenDetails({ address, token, provider, networkID: chainID }));
            });
        }
    }

    const loadApp = useCallback(
        loadProvider => {
            dispatch(loadAppDetails({ networkID: chainID, provider: loadProvider }));
            bonds.map(bond => {
                dispatch(calcBondDetails({ bond, value: null, provider: loadProvider, networkID: chainID }));
            });
            zaps.map(bond => {
                dispatch(calcBondDetailsZap({ bond, value: null, provider: loadProvider, networkID: chainID }));
            });
            tokens.map(token => {
                dispatch(calculateUserTokenDetails({ address: "", token, provider, networkID: chainID }));
            });
        },
        [connected],
    );

    const loadAccount = useCallback(
        loadProvider => {
            dispatch(loadAccountDetails({ networkID: chainID, address, provider: loadProvider }));
        },
        [connected],
    );

    useEffect(() => {
        if (hasCachedProvider()) {
            connect().then(() => {
                setWalletChecked(true);
            });
        } else {
            setWalletChecked(true);
        }
    }, []);

    useEffect(() => {
        if (walletChecked) {
            loadDetails("app");
            loadDetails("account");
            loadDetails("userBonds");
            loadDetails("userZaps");
            loadDetails("userTokens");
        }
    }, [walletChecked]);

    useEffect(() => {
        if (connected) {
            loadDetails("app");
            loadDetails("account");
            loadDetails("userBonds");
            loadDetails("userZaps");
            loadDetails("userTokens");
        }
    }, [connected]);

    /* if (isAppLoading) return <Loading />; */

    return (
        <ViewBase>
            <Switch>
                {/* <Route exact path="/dashboard">
                    <Dashboard />
                </Route> */}

                <Route exact path="/">
                    <Redirect to="/sale" />
                </Route>

                {/* <Route path="/stake">
                    <Stake />
                </Route> */}

                {/* <Route path="/landing">
                    <Landing />
                </Route> */}

                <Route path="/sale">
                    {bonds.map(bond => {
                        return (
                            <Route exact key={bond.name} path={`/sale/${bond.name}`}>
                                <Bond bond={bond} />
                            </Route>
                        );
                    })}
                    <ChooseBond />
                </Route>

                <Route path="/zap">
                    {zaps.map(bond => {
                        return (
                            <Route exact key={bond.name} path={`/zap/${bond.name}`}>
                                <Zap bond={bond} />
                            </Route>
                        );
                    })}
                    <ChooseZap />
                </Route>

                {/* <Route path="/calculator">
                    <Calculator />
                </Route> */}

                <Route component={NotFound} />
            </Switch>
        </ViewBase>
    );
}

export default App;
