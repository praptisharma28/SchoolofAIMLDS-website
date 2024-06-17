import React from "react";
// import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-bg">
      {"SCHOOL OF AI, ML and DS".split("").map((child, idx) => (
        <span className={"hoverText"} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;