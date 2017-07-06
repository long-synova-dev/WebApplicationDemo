import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from "../services/loginService/authenticate.service";
import { UserComponent } from "../user/user.component";

@Component({
    selector: 'app-login',
    templateUrl: "app/login/login.component.html",
    styleUrls: ['app/login/login.component.css'],
    providers: [AuthenticateService]
})
export class LoginComponent implements OnInit
{
    username: string;
    password: string;
    user: UserComponent;
    
    public errorMsg = '';

    constructor(private _service: AuthenticateService) {
        console.log('LoginComponent -> constructor');
        //this.user = new UserComponent(this.username, this.password);
    }

    ngOnInit() {
        
    }

    appLogin(){
        alert(name);
        alert(this.username);
        if (!this._service.login(this.user)) {
            this.errorMsg = 'failed to login! try again ...';
            return false;
        }
        return true;
    }
    onClick() {
        alert("haha");
    }
}