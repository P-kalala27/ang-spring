export class Products {
    sku: string = "";
    name: string = "";
    description: string = "";
    unitPrice!: number;
    imageUrl: string = "";
    active: boolean = false;
    unitsInStock: number = 0;
    dateCreated: Date = new Date();
    lastUpdated: Date = new Date();
}
