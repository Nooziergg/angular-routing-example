export class Usuario {
  id: number;
  username: string;
  email?: string;  // Campo opcional

  constructor(id: number, username: string, email?: string) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
}
