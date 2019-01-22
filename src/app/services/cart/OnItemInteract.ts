interface OnItemInteract {

  onItemRemoved(id: string);

  onItemQuantityChanged(id: string, increase: boolean);
}
