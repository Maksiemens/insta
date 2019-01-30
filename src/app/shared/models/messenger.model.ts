export class Messenger {

  constructor(
    public enabled: boolean,
    public designation: string,
    public keeping: string,
    public redirectUrl: string,
    public type: string,
    public id?: number,
  ) { }

}