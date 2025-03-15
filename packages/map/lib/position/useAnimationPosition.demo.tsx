/**
 * @author
 * @file useAnimationPosition.demo.ts
 * @fileBase useAnimationPosition.demo
 * @path packages\react-map\lib\position\useAnimationPosition.demo.ts
 * @from
 * @desc
 * @example
 */
import React, { useEffect, useState } from "react";
import { useAnimatedPosition } from "./useAnimationPosition";
import { Vec2 } from "./Vec2";
const TheChild: React.FC<{ position: Vec2 }> = ({ position }) => {
  const { position: animatedPosition, animating } =
    useAnimatedPosition(position);
  console.log(animatedPosition);
  return (
    <>
      <div>{JSON.stringify(animatedPosition)}</div>
      <div>{JSON.stringify(animating)}</div>
    </>
  );
};

interface Props {
  // value: propTypes.any
}
function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const UseAnimationPositionDemo: React.FC<Props> = () => {
  const [position, setPosition] = useState(new Vec2(0, 0));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition(
        new Vec2(getRandomIntInclusive(0, 100), getRandomIntInclusive(0, 100))
      );
    }, 6000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>{JSON.stringify(position)}</div>
      <TheChild position={position}></TheChild>
    </>
  );
};
