import {RouterModule, Routes} from "@angular/router";
import {BoxesComponent} from "./box/boxes.component";
import {AuthenticationComponent} from "./user/authentication.component";
import {USER_ROUTES} from "./user/user.routes";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/boxes', pathMatch: 'full'},
    {path: 'boxes', component: BoxesComponent},
    {path: 'auth', component: AuthenticationComponent, children: USER_ROUTES}
];

export const routing = RouterModule.forRoot(APP_ROUTES);