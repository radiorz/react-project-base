/**
 * @author
 * @file useImageSize.js
 * @fileBase useImageSize
 * @path src\hooks\useImageSize.js
 * @from
 * @desc
 * @todo
 *
 *
 * @done
 * @example
 */
import { getImageSize, type Dimension } from "./getImageSize";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
export function useImageSize(image: string) {
  const [dimensions, setDimensions] = useState<Dimension | null>(null);
  useEffect(() => {
    async function loadMapDimensions() {
      if (image) {
        try {
          const dimensions = await getImageSize(image);
          setDimensions(dimensions);
        } catch (err) {
          console.warn("图片加载错误", err);
          setDimensions(null);
        }
      }
    }
    loadMapDimensions();
  }, [image]);
  return dimensions;
}
