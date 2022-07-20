export class AlertDialogData {
    title: string;
    message: string;
    okay: string;

    constructor(title: string, message: string, okay?: string) {
        this.title = title;
        this.message = message;
        this.okay = okay;
    }
}
