import React from "react";

export default function PrimaryButton({ children, width, padding }) {
  return (
    <button className="button-82-pushable" style={{ width }} role="button">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text" style={{ padding: padding }}>
        {children}
      </span>
    </button>
  );
}
