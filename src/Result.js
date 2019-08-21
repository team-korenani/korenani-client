import React from "react";

export default function Result() {
  return (
    <div>
      <h1>OMG RESUUUULTS</h1>
      <h2>{this.props.getState()}</h2>
    </div>
  );
}
