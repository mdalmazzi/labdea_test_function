import {Component, EventEmitter, Input, Output} from '@angular/core';

import {Box} from "./box.model";
import {BoxService} from "./box.service";

@Component({
    selector: 'app-box',
    templateUrl: './box.component.html'
})
export class BoxComponent {
    @Input() box: Box;
    @Output() editClicked = new EventEmitter<string>();

    constructor(private boxService: BoxService) {}

    onEdit() {
        this.editClicked.emit('Un nuovo Box');
    }

    onDelete() {
        this.boxService.deleteBox(this.box);
    }
}