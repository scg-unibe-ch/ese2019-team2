export class UserModel {
   id: number;
   token: string;
   username: string;
   lastName: string;
   firstName: string;
   email: string;
   role: string;

   constructor(id: number, token: string, username: string, lastName: string, firstName: string, email: string, role: string) {
      this.id = id;
      this.token = token;
      this.username = username;
      this.firstName = firstName;
      this.email = email;
      this.role = role;
   }
}
