import React from "react";
import ClockIcon from "./ClockIcon";

export default function TheTime() {
  return (
    <div>
      <ClockIcon />
      {new Date().toLocaleString()}
    </div>
  );
}
