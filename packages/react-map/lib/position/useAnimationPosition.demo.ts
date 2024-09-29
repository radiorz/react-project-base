/**
 * @author
 * @file useAnimationPosition.demo.ts
 * @fileBase useAnimationPosition.demo
 * @path packages\react-map\lib\position\useAnimationPosition.demo.ts
 * @from 
 * @desc 
 * @example
 */

import { useState, useEffect, memo } from "react"
import { useAnimatedPosition,  } from "./useAnimationPosition"
import { Vec2 } from "./Vec2";
interface Props {
  // value: propTypes.any
}
function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const UseAnimationPositionDemo:React.FC<Props> = ()=> {
  const [position, setPosition] = useState(new Vec2(0,0))
  useEffect(()=>{
    setTimeout(()=> {
      setPosition(new Vec2(getRandomIntInclusive(0,100), getRandomIntInclusive(0,100)))
    },6000)
  }, [])
  const {position: animatedPosition} = useAnimatedPosition(position)
  return (
    <div>
     最终的 position: {JSON.stringify(position)}
     动画的 position: {JSON.stringify(animatedPosition)}
    </div>
  )
}
