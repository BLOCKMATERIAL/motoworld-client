import {RemoteOrderItem} from './RemoteOrderItem';

export class RemoteOrder {

  constructor(
    public userId: string,
    public delivery: string,
    public items: RemoteOrderItem[]
  ) {}

}
