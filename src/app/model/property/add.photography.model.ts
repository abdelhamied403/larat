import { Images } from "./property.images";

export class AddPhotosGraphyModel {
    numberOfPhotos: string;
    photoDate: Date;
    photoTime: Date;
    duration: string;
    photography: boolean;
    images: Images[]
}