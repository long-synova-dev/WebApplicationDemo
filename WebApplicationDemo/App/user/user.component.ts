﻿import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: ``
})
export class UserComponent implements OnInit {
    constructor(public username: string, public password: string) { }

    ngOnInit() {
    }

}