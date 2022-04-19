import React, { useState } from "react";
import "./wrap-button.scss";

function SaleButton() {
    const [showWrap, setShowWrap] = useState(false);

    const handelOpenWrap = () => {
        setShowWrap(true);
    };

    const handelCloseWrap = () => {
        setShowWrap(false);
    };

    return (
        <div>
            <div className="wrap-button" onClick={handelOpenWrap}>
                <a href="#/sale">
                    <p>Sale</p>
                </a>
            </div>
        </div>
    );
}

export default SaleButton;
