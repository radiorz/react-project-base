/**
 * @author
 * @file sandwich-card.demo.tsx
 * @fileBase sandwich-card.demo
 * @path packages\react-ui\lib\the-card\sandwich-card.demo.tsx
 * @from
 * @desc
 * @example
 */

import { SandwichCard } from "./sandwich-card";
export interface SandwichCardDemoProps {
  // value: propTypes.any
}
export const SandwichCardDemo: React.FC<SandwichCardDemoProps> = () => {
  return (
    <div>
      <SandwichCard className="bg-green-300 h-36 w-36">
        <div>123123123</div>
      </SandwichCard>
    </div>
  );
};
