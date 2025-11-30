import React from "react";

const BlurBlob = ({ top, left, size = 300, color }) => {
  return (
    <div
      className="
        absolute 
        -z-10 
        blur-[120px] 
        opacity-50 
        pointer-events-none
      "
      style={{
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "50%",
        position: "absolute",
      }}
    />
  );
};

export default BlurBlob;
