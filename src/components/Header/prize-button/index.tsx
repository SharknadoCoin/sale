import React, { useState } from "react";
import "./wrap-button.scss";

function PrizeButton() {
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
                <a href="https://play.sharknado.io/" target="_blank">
                    <p>Prize</p>
                </a>
            </div>
        </div>
    );
}

export default PrizeButton;
