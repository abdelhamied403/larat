export interface PropertyI {
    contractType: 'rent' | 'sale',
    date: any,
    name: string,
    location: string,
    price: number,
    type: string,
    area: number,
    rooms: number,
    negotiable?: boolean,
    createdBy: string,
    phoneNumber: number,
    photoURLS: string[],
    liked?: boolean;
}

export interface PropertySearchI {
    type?: string,
    propertyType?: string,
    search?: string,
}

export interface PropertyButtonI {
    icon: string,
    title: string,
    description: string,
    additional?: string
}