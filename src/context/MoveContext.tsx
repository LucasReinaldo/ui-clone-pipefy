import { createContext } from 'react';

export interface CardItem {
  id: number;
  content: string;
  labels: string[];
  user?: string;
}

export interface CardProps {
  title: string;
  creatable: boolean;
  done?: boolean;
  cards: CardItem[];
}

interface ContextProps {
  lists: CardProps[];
  moveCard(fromList: number, toList: number, from: number, to: number): void;
  canDrop?(toList: number, from: number, to: number): void;
}

export default createContext<ContextProps>({} as ContextProps);
