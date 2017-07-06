import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "./services/loginService/authenticate.service";
import { UserComponent } from "./user/user.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/login/login.component.css'],
    providers: [ AuthenticateService ]
})
export class AppComponent implements OnInit {
    username: string;
    password: string;
    user: UserComponent;

    public errorMsg = '';
    constructor(private _service: AuthenticateService) {
        console.log('AppComponent -> constructor');
    }

    ngOnInit() {
        console.log('AppComponent -> ngOnInit');
    }

    appLogin() {
        alert(this.username);
        if (!this._service.login(this.user)) {
            this.errorMsg = 'failed to login! try again ...';
            return false;
        }
        return true;
    }
}