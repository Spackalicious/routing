export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800);
            }
        );  
        return promise;
    }

    login() {
        setTimeout(() => {
            this.loggedIn = true;
            console.log("Now you're logged in!"); //will display after 2 seconds.
        }, 2000);
        
    }

    logout() {
        this.loggedIn = false;
    }
}