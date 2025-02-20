
export function getCornerClassName(
  position: string
  // marginNumber: number
) {
  switch (position) {
    case "left-center":
      return "left-4 top-1/2 -translate-y-1/2";
    case "right-center":
      return "right-4 top-1/2 -translate-y-1/2";
    case "top-center":
      return "top-4 left-1/2 -translate-x-1/2";
    case "bottom-center":
      return "bottom-4 left-1/2 -translate-x-1/2";
    case "top-left":
      return "top-4 left-4";
    case "top-right":
      return "top-4 right-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    default:
      return "top-4 right-4";
  }
}
