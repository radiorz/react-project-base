export interface Action {
  icon: any;
  name: string;
  title?: string;
}
export type ActionHandler = (actionType: string) => void;
