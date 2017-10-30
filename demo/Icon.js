import React from "react";

const IconedStatistic = () =>
    <svg viewBox="0 0 100 100" className="diagram">
        <circle
            cx={50}
            cy={50}
            r={45}
            stroke={"black"}
            fill={"none"}
        />
        <rect
            x={20} 
            y={20} 
            width={60} 
            height={60} 
            stroke={"black"}
            fill={"none"}
        />
    </svg>;


export default IconedStatistic;