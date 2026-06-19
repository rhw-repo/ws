import React from "react";
import "./index.css";

type CardsProps = {
    children?: React.ReactNode
}

export default function CardsTwo({children}: CardsProps) {
    return (
        <div>
            <span>{children}</span>
        </div>
    )
}