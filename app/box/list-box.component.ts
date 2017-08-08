import {Component, OnInit} from "@angular/core";
import {Box} from "./box.model";
import {BoxService} from "./box.service";

@Component({
  selector: 'app--box-list',
  template: `<div class="col-md-6 col-md-offset-2">
                 <app-box [box]="box"
                     (editClicked)="box.content = $event"
                        *ngFor="let box of boxes">
                 </app-box>
            </div>
  `,

})
export class ListBoxComponent implements OnInit {
    boxes: Box[] = [];

  constructor(private boxService: BoxService) {}

  ngOnInit(){
      this.boxes = this.boxService.getBoxes();
  }
}
