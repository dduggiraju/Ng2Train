var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { StoreFirstGuard } from './storeFirst.gaurd';
import { AuthComponent } from "./admin/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./admin/auth.guard";
import { ProductTableComponent } from "./admin/productTable.component";
import { ProductEditorComponent } from "./admin/productEditor.component";
import { OrderTableComponent } from "./admin/orderTable.component";
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, StoreModule,
            RouterModule.forRoot([
                {
                    path: "store", component: StoreComponent,
                    canActivate: [StoreFirstGuard]
                },
                {
                    path: "cart", component: CartDetailComponent,
                    canActivate: [StoreFirstGuard]
                },
                {
                    path: "checkout", component: CheckoutComponent,
                    canActivate: [StoreFirstGuard]
                },
                {
                    path: "admin",
                    children: [
                        { path: "auth", component: AuthComponent },
                        {
                            path: "main", component: AdminComponent,
                            canActivate: [AuthGuard],
                            children: [
                                {
                                    path: "products/:mode/:id",
                                    component: ProductEditorComponent
                                },
                                {
                                    path: "products/:mode",
                                    component: ProductEditorComponent
                                },
                                { path: "products", component: ProductTableComponent },
                                { path: "orders", component: OrderTableComponent },
                                { path: "**", redirectTo: "products" }
                            ]
                        },
                        { path: "**", redirectTo: "auth" }
                    ],
                    canActivate: [StoreFirstGuard]
                },
                { path: "**", redirectTo: "/store" }
            ])],
        declarations: [AppComponent],
        providers: [StoreFirstGuard],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map