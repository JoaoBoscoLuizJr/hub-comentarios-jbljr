class User {
    constructor(id, username, password, firstname, lastname) {
        if (id !== undefined, username !== undefined, password !== undefined, firstname !== undefined,
            lastname !== undefined) {
                this.id = id;
                this.username = username;
                this.password = password;
                this.firstname = firstname;
                this.lastname = lastname;
    

        }else if (username !== undefined, password !== undefined){
            this.id = null;
            this.username = username;
            this.password = password;
            this.firstname = null;
            this.lastname = null;

        }else{
            this.id = null;
            this.username = null;
            this.password = null;
            this.firstname = null;
            this.lastname = null;
        }
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = value;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = value;

}
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = value;

    }
    getFirstname() {
        return this.firstname;
    }
    setFirstname(firstname) {
        this.firstname = value;

    }
    getLastname() {
        return this.lastname;
    }
    setLastname(lastname) {
        this.lastname = value;

    }
}

export {User}