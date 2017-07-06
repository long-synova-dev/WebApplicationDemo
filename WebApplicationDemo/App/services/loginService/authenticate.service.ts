import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { UserComponent } from "../../user/user.component";

var users = [
    new UserComponent('admin', 'admin'),
    new UserComponent('admin1', 'admin1')
];

@Injectable()
export class AuthenticateService {

    constructor(private http : Http) { }

    logout() {
        //localStorage.removeItem("user");
        //this._router.navigate(['/login']);
    }

    login(user) {
        //let authenticatedUser = users.find(u => u.username === user.username);
        //if (authenticatedUser && authenticatedUser.password === user.password) {
        //    localStorage.setItem("user", authenticatedUser.username);
        //    this._router.navigate(['/home']);
        //    return true;
        //}
        return false;
    }

    checkCredentials() {
        //if (localStorage.getItem("user") === null) {
        //    this._router.navigate(['/login']);
        //}
    }
}
