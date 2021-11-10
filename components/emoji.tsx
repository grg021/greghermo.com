import React from 'react';

interface Props {
    label?: string;
    symbol?: any;
}

const Emoji = ({label, symbol} : Props) => (
    <span
        className="emoji mr-1"
        role="img"
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
    >
        {symbol}
    </span>
);
export default Emoji;
