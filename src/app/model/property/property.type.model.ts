export class PropertyType{
    
    name: string;
    type: string;
    constant: string;
    orderPosition: number;

    constructor(name: string, type: string, constant: string, orderPosition: number ){
        this.name = name;
        this.constant = constant;
        this.orderPosition = orderPosition;
        this.type = type
    }
}