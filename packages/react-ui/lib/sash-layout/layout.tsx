/**
 * @author
 * @file Layout.tsx
 * @fileBase Test
 * @path src/pages/Test/Layout.tsx
 * @from
 * @desc A flexible layout component that allows for resizable sections
 * @todo
 *
 * @done Converted to TypeScript
 * @example
 */

import React, { useState, ReactNode } from "react";
import Sash from "./sash";
import { DirectionMap, checkPositive } from "./utils";

// Define the prop types for the Layout component
export interface LayoutProps {
  className?: string;
  children: ReactNode | ReactNode[];
  defaultLengths?: number[];
  direction?: "horizontal" | "vertical";
}

// Define the type for the length state
type Lengths = number[];

export const Layout: React.FC<LayoutProps> = ({
  className = "",
  children,
  defaultLengths = [],
  direction = DirectionMap.horizontal,
}) => {
  // State to hold the lengths of each section
  const [lengths, setLengths] = useState<Lengths>(defaultLengths);

  // Determine if the layout is horizontal
  const isHorizontal = direction === DirectionMap.horizontal;

  // Function to create sashes between sections and handle resizing
  function setSash(items: ReactNode[]): ReactNode[] {
    // Function to create a separator (sash) between sections
    function separator(index: number): ReactNode {
      // Handle movement of the sash
      function onMove({ x, y }: { x: number; y: number }): void {
        const move = isHorizontal ? x : y;
        setLengths((prevLengths) =>
          prevLengths.map((length, i) => {
            if (i === index) return length + move;
            if (i === index + 1) return length - move;
            return length;
          })
        );
      }

      // Handle click on the front part of the sash
      function onFrontClick(): void {
        setLengths((prevLengths) => {
          const isFrontPositive = checkPositive(prevLengths[index]);
          const theFrontLength = isFrontPositive ? 0 : defaultLengths[index];
          const theEndLength = checkPositive(
            prevLengths[index + 1] + prevLengths[index] - theFrontLength
          );
          return prevLengths.map((length, i) => {
            if (i === index) return theFrontLength;
            if (i === index + 1) return theEndLength;
            return length;
          });
        });
      }

      // Handle click on the end part of the sash
      function onEndClick(): void {
        setLengths((prevLengths) => {
          const isEndPositive = checkPositive(prevLengths[index + 1]);
          const theEndLength = isEndPositive ? 0 : defaultLengths[index + 1];
          const theFrontLength = checkPositive(
            prevLengths[index + 1] + prevLengths[index] - theEndLength
          );
          return prevLengths.map((length, i) => {
            if (i === index) return theFrontLength;
            if (i === index + 1) return theEndLength;
            return length;
          });
        });
      }

      return (
        <Sash
          direction={direction}
          key={`sash_${index}`}
          onMove={onMove}
          onFrontClick={onFrontClick}
          onEndClick={onEndClick}
        />
      );
    }

    // Map items to divs with appropriate sizes
    const _items = items.map((item, i) => (
      <div
        key={i}
        style={{ [isHorizontal ? "width" : "height"]: `${lengths[i]}px` }}
      >
        {/* Render the item only if its length is truthy */}
        {!!lengths?.[i] && item}
      </div>
    ));

    // Combine items and separators
    return _items.reduce<ReactNode[]>((acc, cur, index) => {
      return acc.concat(cur, index < _items.length - 1 ? separator(index) : []);
    }, []);
  }

  // Ensure children is always an array
  const items = Array.isArray(children) ? children : [children];
  const showItems = setSash(items);

  // Determine the flex direction class
  const theClass = isHorizontal ? "flex-row" : "flex-col";

  return (
    <div className={`flex w-screen h-screen ${theClass} ${className}`}>
      {showItems}
    </div>
  );
};
