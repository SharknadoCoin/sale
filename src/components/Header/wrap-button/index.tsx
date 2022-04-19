import React, { useState } from "react";
import "./wrap-button.scss";

function WrapButton() {
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
                <a href="https://swap.sharknado.io/" target="_blank">
                    <p>Swap</p>
                </a>
            </div>
        </div>
    );
}

export default WrapButton;
