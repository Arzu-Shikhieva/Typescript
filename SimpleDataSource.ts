import {Product} from "./Product";


export class SimpleDataSource {
    private products:Product[];

    constructor() {
        this.products = new Array<Product>(
            new Product(1,'Iphone S4', 'Phone', 800),
            new Product(2,'Iphone S5', 'Phone', 1000),
            new Product(3,'Iphone S6', 'Phone', 1100),
            new Product(4,'Iphone S7', 'Phone', 1400),
            new Product(5,'Iphone S8', 'Phone', 1600)
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}
