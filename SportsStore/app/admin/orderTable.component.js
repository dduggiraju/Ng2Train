var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
let OrderTableComponent = class OrderTableComponent {
    constructor(repository) {
        this.repository = repository;
        this.includeShipped = false;
    }
    getOrders() {
        return this.repository.getOrders()
            .filter(o => this.includeShipped || !o.shipped);
    }
    markShipped(order) {
        order.shipped = true;
        this.repository.updateOrder(order);
    }
    delete(id) {
        this.repository.deleteOrder(id);
    }
};
OrderTableComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: "orderTable.component.html"
    }),
    __metadata("design:paramtypes", [OrderRepository])
], OrderTableComponent);
export { OrderTableComponent };
//# sourceMappingURL=orderTable.component.js.map