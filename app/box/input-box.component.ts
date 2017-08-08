import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import {BoxService} from "./box.service";
import {Box} from "./box.model";


@Component({
    selector: 'app-input-box',
    templateUrl: './input-box.component.html',

})
export class InputBoxComponent {
    constructor(private boxService: BoxService) {}

    onSubmit(form: NgForm) {

        const box = new Box(form.value.content, 'Massimo')
        this.boxService.addBox(box);
        form.resetForm();

    }
}