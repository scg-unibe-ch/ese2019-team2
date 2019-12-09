export class UserModel {
   id: string;
   token: any;
   lastName: string;
   firstName: string;
   userName: string;
   email: string;
   password: string;
   role: string;

   constructor(id: string, lastName: string, firstName: string, userName: string, email: string, password: string, role: string) {
      this.id = id;
      this.token = null;
      this.lastName = lastName;
      this.firstName = firstName;
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.role = role;
   }
}
