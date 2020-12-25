"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, 'Iphone S4', 'Phone', 800), new Product_1.Product(2, 'Iphone S5', 'Phone', 1000), new Product_1.Product(3, 'Iphone S6', 'Phone', 1100), new Product_1.Product(4, 'Iphone S7', 'Phone', 1400), new Product_1.Product(5, 'Iphone S8', 'Phone', 1600));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
