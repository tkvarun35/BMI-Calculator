import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

function Speedometer({ value }) {
   
  return (
    <div className="flex flex-col items-center pt-24">
      <ReactSpeedometer
        // fluidWidth={true}
        minValue={0}
        maxValue={40}
        value={value}
        needleColor="purple"
        startColor="green"
        segments={10}
        needleTransitionDuration={4000}
        needleTransition="easeElastic"
        endColor="red"
      />
    </div>
  );
}

export default Speedometer;
