
export class Images {
    fileUrl: string;
    fileName: string;
    contentType: string;
    type: string;
    constructor(images: any){
        this.fileUrl = images.fileUrl;
        this.fileName = images.fileName;
        this.contentType = images.contentType;
        this.type = images.type;
    }
}