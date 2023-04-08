import React from "react";
import Heatmap from "./Heatmap";
const HeatComponent = () => {
  return (
    <div className="mp-achievement-box">
      <div className="mp-top-row">
        <div className="mp-left-header">
          <span>Cipher Map</span>
        </div>
      </div>
      <div>
        <Heatmap />
      </div>
      <div className="mp-heat-map-foot">
        <span>Less</span>
        <svg width="12" height="12">
          <rect width="12" height="12" fill="var(--heat-map-empty)"></rect>
        </svg>
        <svg width="12" height="12">
          <rect width="12" height="12" fill="#f3dcc4"></rect>
        </svg>
        <svg width="12" height="12">
          <rect width="12" height="12" fill="#e5b583"></rect>
        </svg>
        <svg width="12" height="12">
          <rect width="12" height="12" fill="#d48432"></rect>
        </svg>
        <svg width="12" height="12">
          <rect width="12" height="12" fill="#c87a2a"></rect>
        </svg>
        <span>More</span>
      </div>
    </div>
  );
};

export default HeatComponent;
