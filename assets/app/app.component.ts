import { Component } from '@angular/core';
import {BoxService} from "./box/box.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [BoxService]
})
export class AppComponent {

}