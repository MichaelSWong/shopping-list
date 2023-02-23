export interface IHeader {
  label: string;
}

export interface ItemProps {
  item: string;
  onRemoveItem: (itemToRemove: string) => void;
}
