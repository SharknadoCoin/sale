import { Box, Modal, Paper, SvgIcon, IconButton, FormControl, OutlinedInput, InputLabel, InputAdornment, Link } from "@material-ui/core";
import { useEffect, useState } from "react";
import { ReactComponent as XIcon } from "../../assets/icons/x.svg";
import "./bondSettings.scss";

interface IAdvancedSettingsProps {
    open: boolean;
    handleClose: () => void;
    slippage: number;
    onSlippageChange: (e: any) => void;
}

function AdvancedSettings({ open, handleClose, slippage, onSlippageChange }: IAdvancedSettingsProps) {
    const [value, setValue] = useState(slippage);

    useEffect(() => {
        let timeount: any = null;
        clearTimeout(timeount);

        timeount = setTimeout(() => onSlippageChange(value), 1000);
        return () => clearTimeout(timeount);
    }, [value]);

    return (
        <Modal id="hades" open={open} onClose={handleClose} hideBackdrop>
            <Paper className="ohm-card ohm-popover">
                <div className="cross-wrap">
                    <IconButton onClick={handleClose}>
                        <SvgIcon color="primary" component={XIcon} />
                    </IconButton>
                </div>

                <p className="hades-title">SHARKO Sale</p>

                <Box className="card-content">
                    <p className="input-lable">Documentation:</p>
                    <p className="input-sublable">
                        <Link href="#">- Tokenomics</Link>
                    </p>
                    <p className="input-sublable">
                        <Link href="#">- Vesting Sale</Link>
                    </p>
                    <p className="input-sublable">
                        <Link href="#">- Scholarship</Link>
                    </p>
                    <p className="input-sublable">
                        <Link href="#">- vSHARKOS Airdrop</Link>
                    </p>

                    <FormControl variant="outlined" color="primary" fullWidth>
                        <p className="input-lable">Disclaimer</p>
                        <div className="help-text">
                            <p className="text-bond-desc">Transaction may revert if price changes by more than slippage %</p>
                        </div>
                    </FormControl>
                </Box>
            </Paper>
        </Modal>
    );
}

export default AdvancedSettings;
