import React from "react";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id={props.id}
      style={{
        right: "-45px",
      }}
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos />
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      id={props.id}
      style={{
        left: "-30px",
      }}
      onClick={onClick}
    >
      <MdOutlineArrowBackIos />
    </div>
  );
}

export { PrevArrow, NextArrow };
