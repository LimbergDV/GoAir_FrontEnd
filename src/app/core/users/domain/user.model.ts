export class User {
  constructor(
    public id_user: number,
    public first_name: string,
    public last_name: string,
    public email: string,
    public password: string
  ) {}
}