import {Box} from "./box.model";

export class BoxService {
    private boxes: Box[] = [];

    addBox(box: Box) {
        this.boxes.push(box);
        console.log(this.boxes);
    }

    getBoxes() {
        return this.boxes;
    }

    deleteBox(box: Box) {
        this.boxes.splice(this.boxes.indexOf(box), 1);
    }


}