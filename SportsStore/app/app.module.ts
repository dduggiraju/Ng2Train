import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from './store/store.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { StoreFirstGuard } from './storeFirst.gaurd';
import { AdminModule } from "./admin/admin.module";
import { AuthComponent } from "./admin/auth.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./admin/auth.guard";
import { ProductTableComponent } from "./admin/productTable.component";
import { ProductEditorComponent } from "./admin/productEditor.component";
import { OrderTableComponent } from "./admin/orderTable.component";
//import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing

@NgModule({
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
                // loadChildren: "app/admin/admin.module#AdminModule",
                canActivate: [StoreFirstGuard]
            },
            { path: "**", redirectTo: "/store" }
        ])],
    declarations: [AppComponent],
    providers: [StoreFirstGuard],
    bootstrap: [AppComponent],
})
export class AppModule { }
