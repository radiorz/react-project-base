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
    <div className="flex items-center justify-center w-screen h-screen">
      <SandwichCard
        barProps={{
          className: "bg-red-300 dark:bg-red-700",
          renderTitle() {
            return <div>123</div>;
          },
          actions: [
            {
              icon: "add",
              name: "add",
            },
            {
              icon: "add",
              name: "add",
            },
            {
              icon: "add",
              name: "add",
            },
            {
              icon: "add",
              name: "add",
            },
          ],
        }}
        className="bg-green-300 h-60 w-60"
        footer={<div>123</div>}
      >
        <div>123123123</div>
      </SandwichCard>
    </div>
  );
};
