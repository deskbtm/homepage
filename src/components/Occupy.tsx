import React, { FC } from "react";

export const Occupy: FC<{
  height?: string | number;
  width?: string | number;
}> = function (props) {
  return (
    <div
      style={{
        display: "inline-block",
        height: props.height,
        width: props.width,
      }}
    />
  );
};
