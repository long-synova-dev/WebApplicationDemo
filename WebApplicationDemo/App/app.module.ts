import { NgModule } from '@angular/core';
import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
    MaterialModule, MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
    MdInputModule, MdProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        //routing,
        //AppRoutingModule,
        MaterialModule,
        MdInputModule,
        MdButtonModule,
        MdProgressSpinnerModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent
        //LoginComponent
    ],
    bootstrap: [AppComponent],
    providers: [
    ]
})
export class AppModule { }