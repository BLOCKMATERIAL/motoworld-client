export class UserInfo {

  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public address: string = ''
  ) {
  }

  stringify(): string {
    return `${this.firstName} ${this.lastName} ${this.address}`;
  }

}
