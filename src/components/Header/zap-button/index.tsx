import React, { useState } from "react";
import "./wrap-button.scss";

function ZapButton() {
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
                <a href="#/zap">
                    <p>Zap</p>
                </a>
            </div>
        </div>
    );
}

export default ZapButton;
