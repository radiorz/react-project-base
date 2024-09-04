export const DirectionMap = {
  horizontal: "horizontal",
  vertical: "vertical",
} as const;
export function checkPositive(v: number) {
  return v > 0 ? v : 0;
}
