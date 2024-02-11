import React from "react";
import "./AgeResult.css";

export default function AgeResult({ age }) {
  return (
    <div className="result">
      <h4>
        You are {age.years} years, {age.months} months, and {age.days} days Old...
      </h4>
    </div>
  );
}
