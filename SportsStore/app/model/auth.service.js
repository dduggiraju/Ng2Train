var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import "rxjs/add/operator/map";
let AuthService = class AuthService {
    constructor(datasource) {
        this.datasource = datasource;
    }
    authenticate(username, password) {
        return this.datasource.authenticate(username, password);
    }
    get authenticated() {
        return this.datasource.auth_token != null;
    }
    clear() {
        this.datasource.auth_token = null;
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RestDataSource])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map