"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
//import { StaticDataSource } from "./static.datasource";
const rest_datasource_1 = require("./rest.datasource");
let OrderRepository = class OrderRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    loadOrders() {
        this.loaded = true;
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders);
    }
    getOrders() {
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }
    saveOrder(order) {
        return this.dataSource.saveOrder(order);
    }
    updateOrder(order) {
        this.dataSource.updateOrder(order).subscribe(order => {
            this.orders.splice(this.orders.
                findIndex(o => o.id == order.id), 1, order);
        });
    }
    deleteOrder(id) {
        this.dataSource.deleteOrder(id).subscribe(order => {
            this.orders.splice(this.orders.findIndex(o => id == o.id));
        });
    }
};
OrderRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [rest_datasource_1.RestDataSource])
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map