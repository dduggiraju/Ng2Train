import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CheckoutComponent } from './checkout.component';
import { CartDetailComponent } from './cartDetail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
    exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
    providers: [],
})
export class StoreModule { }
