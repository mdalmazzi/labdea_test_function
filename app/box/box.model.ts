export class Box {
    content: string;
    username: string;
    boxId?: string;
    userId?: string;

    constructor(content: string, username: string, boxId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.boxId = boxId;
        this.userId = userId;
    }
}