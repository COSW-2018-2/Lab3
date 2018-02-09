export class User {
    private username: string;
    private firstname: string;
    private email: string;
    private lastname: string;
    private image: string;
    private password: string;

    constructor(username:string, firstname: string,email:string, lastname: string, image: string,password:string) {
        this.username = username;
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.image = image;
        this.password = password;
    }
}