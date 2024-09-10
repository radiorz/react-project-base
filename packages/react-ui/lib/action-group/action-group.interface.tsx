export interface Action {
  icon: any;
  name: string;
  title?: string;
}
export type ActionHandler = (type: string) => void;
