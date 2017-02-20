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
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
let ProductEditorComponent = class ProductEditorComponent {
    constructor(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new Product();
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    save(form) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
};
ProductEditorComponent = __decorate([
    Component({
        moduleId: module.id,
        templateUrl: "productEditor.component.html"
    }),
    __metadata("design:paramtypes", [ProductRepository,
        Router,
        ActivatedRoute])
], ProductEditorComponent);
export { ProductEditorComponent };
//# sourceMappingURL=productEditor.component.js.map