import {InputTypeOrder} from './InputTypeOrder';
import {InputTypeExtendedItems} from './InputTypeExtendedItems';

export class InputOrder {

  constructor(
    public order: InputTypeOrder = new InputTypeOrder(),
    public extended: InputTypeExtendedItems = new InputTypeExtendedItems()
  ) {}
}
