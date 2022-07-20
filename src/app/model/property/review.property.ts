import { Images } from "./property.images";

export class ReviewProperty {
    propertyType: string;
    adType: string;
    rooms: string;
    floorNumber: string;
    finishType: string;
    bathroom: string;
    region: string;
    city: string;
    address: string;
    longitude: string;
    latitude: string;
    streetWidth: string;
    area: string;
    price: string;
    adTitle: string;
    details: string;
    garage: boolean;
    enableReserve: boolean;
    downPayment: string;
    downPaymentExpiryDate: string;
    negotiable: boolean;
    minimumPrice: string;
    images: Images[];
    numberOfPhotos: string | null;
    photoDate: Date | null;
    photoTime: Date | null;
    duration: string | null;
    photography: boolean;
    receptions: string;
}
