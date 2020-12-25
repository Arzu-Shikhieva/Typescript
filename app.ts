import { ProductService } from "./ProductService";
import {Product} from "./Product";

let _productService = new ProductService();

let result;
result = _productService.getById(2);

let p = new Product();

p.id = 2;
p.name = 'Asus';
p.category = 'Computer';
p.price = 2000;

result = _productService.saveProduct(p);
result = _productService.getProducts();


console.log(result);
