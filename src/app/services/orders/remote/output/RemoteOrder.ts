import {RemoteOrderItem} from './RemoteOrderItem';

export class RemoteOrder {

  constructor(
    public user_id: string,
    public delivery: string,
    public items: RemoteOrderItem[]
  ) {}

}
