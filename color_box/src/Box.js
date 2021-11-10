import React from "react";

const Box = (
  id,
  width = 2,
  height = 2,
  backgroundColor = "red",
  handleRemove
) => {
  const remove = () => handleRemove(id);
  return (
    <div
      style={{
        height: `${height}em`,
        width: `${width}em`,
        backgroundColor,
      }}
    >
      <button onClick={remove}>Remove the Box</button>
    </div>
  );
};

export default Box;
