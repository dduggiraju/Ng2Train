import * as import0 from '../../../app/store/store.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '../../../app/model/cart.model';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '@angular/core/src/change_detection/change_detection_util';
import * as import13 from '../../../app/store/cartSummary.component';
import * as import14 from './cartSummary.component.ngfactory';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/select_control_value_accessor.ngfactory';
import * as import18 from '../../node_modules/@angular/forms/src/directives/select_multiple_control_value_accessor.ngfactory';
import * as import19 from './counter.directive.ngfactory';
import * as import20 from '@angular/common/src/pipes/number_pipe';
import * as import21 from '@angular/core/src/linker/template_ref';
import * as import22 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import23 from '@angular/router/src/router_state';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from '@angular/core/src/i18n/tokens';
import * as import26 from '@angular/common/src/directives/ng_for';
import * as import27 from '@angular/router/src/directives/router_link';
import * as import28 from '@angular/forms/src/directives/select_control_value_accessor';
import * as import29 from '@angular/forms/src/directives/select_multiple_control_value_accessor';
import * as import30 from '../../../app/store/counter.directive';
export class Wrapper_StoreComponent {
    constructor(p0, p1, p2) {
        this._changed = false;
        this.context = new import0.StoreComponent(p0, p1, p2);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_StoreComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_StoreComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_StoreComponent_Host0, renderType_StoreComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'store', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_StoreComponent0(this.viewUtils, this, 0, this._el_0);
        this._StoreComponent_0_3 = new Wrapper_StoreComponent(this.injectorGet(import8.ProductRepository, this.parentIndex), this.injectorGet(import9.Cart, this.parentIndex), this.injectorGet(import10.Router, this.parentIndex));
        this.compView_0.create(this._StoreComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._StoreComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.StoreComponent) && (0 === requestNodeIndex))) {
            return this._StoreComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._StoreComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const StoreComponentNgFactory = new import7.ComponentFactory('store', View_StoreComponent_Host0, import0.StoreComponent);
const styles_StoreComponent = [];
class View_StoreComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_StoreComponent1, renderType_StoreComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import12.UNINITIALIZED;
        this._expr_3 = import12.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray2(2, 'class', 'btn btn-outline-primary btn-block'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = (this.context.$implicit == this.parentView.context.selectedCategory);
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'active', currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = import3.inlineInterpolate(1, '\n                ', this.context.$implicit, '\n                ');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.changeCategory(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_StoreComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_StoreComponent2, renderType_StoreComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_14 = import12.UNINITIALIZED;
        this._expr_15 = import12.UNINITIALIZED;
        this._expr_17 = import12.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray4(4, 'class', 'card card-outline-primary', 'style', 'margin-top: 5px;'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h4', new import3.InlineArray2(2, 'class', 'card-header'), null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'span', new import3.InlineArray2(2, 'class', 'pull-right tag tag-pill tag-primary'), null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n                ', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'card-text p-a-1'), null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'button', new import3.InlineArray2(2, 'class', 'btn btn-success btn-sm pull-right'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n                    Add To Cart\n                ', null);
        this._text_12 = this.renderer.createText(this._el_8, '\n                ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n            ', null);
        this._pipe_currency_0_0 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_10));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import12.ValueUnwrapper();
        const currVal_14 = import3.inlineInterpolate(1, '\n                    ', this.context.$implicit.name, '\n                    ');
        if (import3.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setText(this._text_3, currVal_14);
            this._expr_14 = currVal_14;
        }
        valUnwrapper.reset();
        const currVal_15 = import3.inlineInterpolate(1, '\n                   ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0, this.parentView._pipe_currency_0.transform)(this.context.$implicit.price, 'USD', true, '2.2-2')), ' \n                ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_15, currVal_15))) {
            this.renderer.setText(this._text_5, currVal_15);
            this._expr_15 = currVal_15;
        }
        const currVal_17 = import3.inlineInterpolate(1, '\n                    ', this.context.$implicit.description, '\n                    ');
        if (import3.checkBinding(throwOnChange, this._expr_17, currVal_17)) {
            this.renderer.setText(this._text_9, currVal_17);
            this._expr_17 = currVal_17;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_10(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.addProductToCart(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
class View_StoreComponent3 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_StoreComponent3, renderType_StoreComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import12.UNINITIALIZED;
        this._expr_3 = import12.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'button', new import3.InlineArray2(2, 'class', 'btn btn-outline-primary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = (this.context.$implicit == this.parentView.context.selectedPage);
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'active', currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = import3.inlineInterpolate(1, '\n            ', this.context.$implicit, '\n         ');
        if (import3.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.changePage(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
var renderType_StoreComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_StoreComponent, {});
export class View_StoreComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_StoreComponent0, renderType_StoreComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_81 = import12.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'nav', new import3.InlineArray2(2, 'class', 'navbar'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'div', new import3.InlineArray2(2, 'class', 'navbar-header'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'a', new import3.InlineArray4(4, 'class', 'navbar-brand', 'href', '#'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Sports Store', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'span', new import3.InlineArray2(2, 'class', 'nav-item pull-right'), null);
        this._text_10 = this.renderer.createText(this._el_9, ' ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_9, 'cart-summary', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_11 = new import14.View_CartSummaryComponent0(this.viewUtils, this, 11, this._el_11);
        this._CartSummaryComponent_11_3 = new import14.Wrapper_CartSummaryComponent(this.parentView.injectorGet(import9.Cart, this.parentIndex));
        this.compView_11.create(this._CartSummaryComponent_11_3.context);
        this._text_12 = this.renderer.createText(this._el_9, ' ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_14 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-3'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_18, 'button', new import3.InlineArray2(2, 'class', 'btn btn-block btn-outline-primary'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Home', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n            ', null);
        this._anchor_23 = this.renderer.createTemplateAnchor(this._el_18, null);
        this._vc_23 = new import11.ViewContainer(23, 18, this, this._anchor_23);
        this._TemplateRef_23_5 = new import21.TemplateRef_(this, 23, this._anchor_23);
        this._NgFor_23_6 = new import15.Wrapper_NgFor(this._vc_23.vcRef, this._TemplateRef_23_5, this.parentView.injectorGet(import22.IterableDiffers, this.parentIndex), this.ref);
        this._text_24 = this.renderer.createText(this._el_18, '\n                ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_18, 'button', new import3.InlineArray4(4, 'class', 'btn btn-block btn-danger m-t-3', 'routerLink', '/admin'), null);
        this._RouterLink_25_3 = new import16.Wrapper_RouterLink(this.parentView.injectorGet(import10.Router, this.parentIndex), this.parentView.injectorGet(import23.ActivatedRoute, this.parentIndex));
        this._text_26 = this.renderer.createText(this._el_25, 'Admin', null);
        this._text_27 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_28 = this.renderer.createText(this._el_16, '\n        ', null);
        this._el_29 = import3.createRenderElement(this.renderer, this._el_16, 'div', new import3.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_30 = this.renderer.createText(this._el_29, '\n            ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_29, null);
        this._vc_31 = new import11.ViewContainer(31, 29, this, this._anchor_31);
        this._TemplateRef_31_5 = new import21.TemplateRef_(this, 31, this._anchor_31);
        this._NgFor_31_6 = new import15.Wrapper_NgFor(this._vc_31.vcRef, this._TemplateRef_31_5, this.parentView.injectorGet(import22.IterableDiffers, this.parentIndex), this.ref);
        this._text_32 = this.renderer.createText(this._el_29, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_29, 'div', import3.EMPTY_INLINE_ARRAY, null);
        this._text_34 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_35 = import3.createRenderElement(this.renderer, this._el_33, 'div', new import3.InlineArray2(2, 'class', 'form-inline pull-left m-r-1'), null);
        this._text_36 = this.renderer.createText(this._el_35, '\n                    ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_35, 'select', new import3.InlineArray2(2, 'class', 'form-control'), null);
        this._text_38 = this.renderer.createText(this._el_37, '\n                       ', null);
        this._el_39 = import3.createRenderElement(this.renderer, this._el_37, 'option', new import3.InlineArray2(2, 'value', '3'), null);
        this._NgSelectOption_39_3 = new import17.Wrapper_NgSelectOption(new import24.ElementRef(this._el_39), this.renderer, null);
        this._NgSelectMultipleOption_39_4 = new import18.Wrapper_NgSelectMultipleOption(new import24.ElementRef(this._el_39), this.renderer, null);
        this._text_40 = this.renderer.createText(this._el_39, '3 per Page', null);
        this._text_41 = this.renderer.createText(this._el_37, '\n                       ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_37, 'option', new import3.InlineArray2(2, 'value', '4'), null);
        this._NgSelectOption_42_3 = new import17.Wrapper_NgSelectOption(new import24.ElementRef(this._el_42), this.renderer, null);
        this._NgSelectMultipleOption_42_4 = new import18.Wrapper_NgSelectMultipleOption(new import24.ElementRef(this._el_42), this.renderer, null);
        this._text_43 = this.renderer.createText(this._el_42, '4 per Page', null);
        this._text_44 = this.renderer.createText(this._el_37, '\n                       ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_37, 'option', new import3.InlineArray2(2, 'value', '6'), null);
        this._NgSelectOption_45_3 = new import17.Wrapper_NgSelectOption(new import24.ElementRef(this._el_45), this.renderer, null);
        this._NgSelectMultipleOption_45_4 = new import18.Wrapper_NgSelectMultipleOption(new import24.ElementRef(this._el_45), this.renderer, null);
        this._text_46 = this.renderer.createText(this._el_45, '6 per Page', null);
        this._text_47 = this.renderer.createText(this._el_37, '\n                      ', null);
        this._el_48 = import3.createRenderElement(this.renderer, this._el_37, 'option', new import3.InlineArray2(2, 'value', '8'), null);
        this._NgSelectOption_48_3 = new import17.Wrapper_NgSelectOption(new import24.ElementRef(this._el_48), this.renderer, null);
        this._NgSelectMultipleOption_48_4 = new import18.Wrapper_NgSelectMultipleOption(new import24.ElementRef(this._el_48), this.renderer, null);
        this._text_49 = this.renderer.createText(this._el_48, '8 per Page', null);
        this._text_50 = this.renderer.createText(this._el_37, '\n            ', null);
        this._text_51 = this.renderer.createText(this._el_35, '\n                ', null);
        this._text_52 = this.renderer.createText(this._el_33, '\n                ', null);
        this._el_53 = import3.createRenderElement(this.renderer, this._el_33, 'div', new import3.InlineArray2(2, 'class', 'btn-group pull-right'), null);
        this._text_54 = this.renderer.createText(this._el_53, '\n                    ', null);
        this._anchor_55 = this.renderer.createTemplateAnchor(this._el_53, null);
        this._vc_55 = new import11.ViewContainer(55, 53, this, this._anchor_55);
        this._TemplateRef_55_5 = new import21.TemplateRef_(this, 55, this._anchor_55);
        this._CounterDirective_55_6 = new import19.Wrapper_CounterDirective(this._vc_55.vcRef, this._TemplateRef_55_5);
        this._text_56 = this.renderer.createText(this._el_53, '\n                ', null);
        this._text_57 = this.renderer.createText(this._el_33, '\n            ', null);
        this._text_58 = this.renderer.createText(this._el_29, '\n        ', null);
        this._text_59 = this.renderer.createText(this._el_16, '\n    ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_25));
        this._pipe_currency_0 = new import20.CurrencyPipe(this.parentView.injectorGet(import25.LOCALE_ID, this.parentIndex));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_37, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_37));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._anchor_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._anchor_55,
            this._text_56,
            this._text_57,
            this._text_58,
            this._text_59
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import13.CartSummaryComponent) && (11 === requestNodeIndex))) {
            return this._CartSummaryComponent_11_3.context;
        }
        if (((token === import21.TemplateRef) && (23 === requestNodeIndex))) {
            return this._TemplateRef_23_5;
        }
        if (((token === import26.NgFor) && (23 === requestNodeIndex))) {
            return this._NgFor_23_6.context;
        }
        if (((token === import27.RouterLink) && ((25 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._RouterLink_25_3.context;
        }
        if (((token === import21.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import26.NgFor) && (31 === requestNodeIndex))) {
            return this._NgFor_31_6.context;
        }
        if (((token === import28.NgSelectOption) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._NgSelectOption_39_3.context;
        }
        if (((token === import29.NgSelectMultipleOption) && ((39 <= requestNodeIndex) && (requestNodeIndex <= 40)))) {
            return this._NgSelectMultipleOption_39_4.context;
        }
        if (((token === import28.NgSelectOption) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgSelectOption_42_3.context;
        }
        if (((token === import29.NgSelectMultipleOption) && ((42 <= requestNodeIndex) && (requestNodeIndex <= 43)))) {
            return this._NgSelectMultipleOption_42_4.context;
        }
        if (((token === import28.NgSelectOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectOption_45_3.context;
        }
        if (((token === import29.NgSelectMultipleOption) && ((45 <= requestNodeIndex) && (requestNodeIndex <= 46)))) {
            return this._NgSelectMultipleOption_45_4.context;
        }
        if (((token === import28.NgSelectOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectOption_48_3.context;
        }
        if (((token === import29.NgSelectMultipleOption) && ((48 <= requestNodeIndex) && (requestNodeIndex <= 49)))) {
            return this._NgSelectMultipleOption_48_4.context;
        }
        if (((token === import21.TemplateRef) && (55 === requestNodeIndex))) {
            return this._TemplateRef_55_5;
        }
        if (((token === import30.CounterDirective) && (55 === requestNodeIndex))) {
            return this._CounterDirective_55_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CartSummaryComponent_11_3.ngDoCheck(this, this._el_11, throwOnChange);
        const currVal_23_0_0 = this.context.categories;
        this._NgFor_23_6.check_ngForOf(currVal_23_0_0, throwOnChange, false);
        this._NgFor_23_6.ngDoCheck(this, this._anchor_23, throwOnChange);
        const currVal_25_0_0 = '/admin';
        this._RouterLink_25_3.check_routerLink(currVal_25_0_0, throwOnChange, false);
        this._RouterLink_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_31_0_0 = this.context.products;
        this._NgFor_31_6.check_ngForOf(currVal_31_0_0, throwOnChange, false);
        this._NgFor_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        const currVal_39_0_0 = '3';
        this._NgSelectOption_39_3.check_value(currVal_39_0_0, throwOnChange, false);
        this._NgSelectOption_39_3.ngDoCheck(this, this._el_39, throwOnChange);
        const currVal_39_1_0 = '3';
        this._NgSelectMultipleOption_39_4.check_value(currVal_39_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_39_4.ngDoCheck(this, this._el_39, throwOnChange);
        const currVal_42_0_0 = '4';
        this._NgSelectOption_42_3.check_value(currVal_42_0_0, throwOnChange, false);
        this._NgSelectOption_42_3.ngDoCheck(this, this._el_42, throwOnChange);
        const currVal_42_1_0 = '4';
        this._NgSelectMultipleOption_42_4.check_value(currVal_42_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_42_4.ngDoCheck(this, this._el_42, throwOnChange);
        const currVal_45_0_0 = '6';
        this._NgSelectOption_45_3.check_value(currVal_45_0_0, throwOnChange, false);
        this._NgSelectOption_45_3.ngDoCheck(this, this._el_45, throwOnChange);
        const currVal_45_1_0 = '6';
        this._NgSelectMultipleOption_45_4.check_value(currVal_45_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_45_4.ngDoCheck(this, this._el_45, throwOnChange);
        const currVal_48_0_0 = '8';
        this._NgSelectOption_48_3.check_value(currVal_48_0_0, throwOnChange, false);
        this._NgSelectOption_48_3.ngDoCheck(this, this._el_48, throwOnChange);
        const currVal_48_1_0 = '8';
        this._NgSelectMultipleOption_48_4.check_value(currVal_48_1_0, throwOnChange, false);
        this._NgSelectMultipleOption_48_4.ngDoCheck(this, this._el_48, throwOnChange);
        const currVal_55_0_0 = this.context.pageCount;
        this._CounterDirective_55_6.check_counter(currVal_55_0_0, throwOnChange, false);
        this._CounterDirective_55_6.ngDoCheck(this, this._anchor_55, throwOnChange);
        this._vc_23.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._vc_55.detectChangesInNestedViews(throwOnChange);
        const currVal_81 = this.context.productsPerPage;
        if (import3.checkBinding(throwOnChange, this._expr_81, currVal_81)) {
            this.renderer.setElementProperty(this._el_37, 'value', currVal_81);
            this._expr_81 = currVal_81;
        }
        this.compView_11.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this._vc_23.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._vc_55.destroyNestedViews();
        this.compView_11.destroy();
        this._NgSelectOption_39_3.ngOnDestroy();
        this._NgSelectMultipleOption_39_4.ngOnDestroy();
        this._NgSelectOption_42_3.ngOnDestroy();
        this._NgSelectMultipleOption_42_4.ngOnDestroy();
        this._NgSelectOption_45_3.ngOnDestroy();
        this._NgSelectMultipleOption_45_4.ngOnDestroy();
        this._NgSelectOption_48_3.ngOnDestroy();
        this._NgSelectMultipleOption_48_4.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 23)) {
            return new View_StoreComponent1(this.viewUtils, this, 23, this._anchor_23, this._vc_23);
        }
        if ((nodeIndex == 31)) {
            return new View_StoreComponent2(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        if ((nodeIndex == 55)) {
            return new View_StoreComponent3(this.viewUtils, this, 55, this._anchor_55, this._vc_55);
        }
        return null;
    }
    handleEvent_20(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.changeCategory() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_25(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_25_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_37(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            const pd_sub_0 = (this.context.changePageSize($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
//# sourceMappingURL=store.component.ngfactory.js.map