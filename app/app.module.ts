import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import {BoxComponent} from "./box/box.component";
import {ListBoxComponent} from "./box/list-box.component";
import {InputBoxComponent} from "./box/input-box.component";
import {BoxesComponent} from "./box/boxes.component";
import {AuthenticationComponent} from "./user/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {routing} from "./app-routing";
import {LogoutComponent} from "./user/logout.component"
import {SignupComponent} from "./user/signup.component";
import {SigninComponent} from "./user/signin.component";


@NgModule({
    declarations: [
        AppComponent,
        BoxComponent,
        ListBoxComponent,
        InputBoxComponent,
        BoxesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}