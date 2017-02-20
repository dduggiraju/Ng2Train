import * as import0 from '../../../app/store/cartSummary.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/cart.model';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import13 from '@angular/common/src/pipes/number_pipe';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/router/src/router';
import * as import16 from '@angular/router/src/router_state';
import * as import17 from '@angular/core/src/i18n/tokens';
import * as import18 from '@angular/common/src/directives/ng_if';
import * as import19 from '@angular/router/src/directives/router_link';
export class Wrapper_CartSummaryComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.CartSummaryComponent(p0);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
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
var renderType_CartSummaryComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CartSummaryComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CartSummaryComponent_Host0, renderType_CartSummaryComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'cart-summary', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CartSummaryComponent0(this.viewUtils, this, 0, this._el_0);
        this._CartSummaryComponent_0_3 = new Wrapper_CartSummaryComponent(this.injectorGet(import8.Cart, this.parentIndex));
        this.compView_0.create(this._CartSummaryComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CartSummaryComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CartSummaryComponent) && (0 === requestNodeIndex))) {
            return this._CartSummaryComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CartSummaryComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CartSummaryComponentNgFactory = new import7.ComponentFactory('cart-summary', View_CartSummaryComponent_Host0, import0.CartSummaryComponent);
const styles_CartSummaryComponent = [];
class View_CartSummaryComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CartSummaryComponent1, renderType_CartSummaryComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._pipe_currency_0_0 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import10.ValueUnwrapper();
        valUnwrapper.reset();
        const currVal_2 = import3.inlineInterpolate(2, '\n                ', this.parentView.context.cart.itemCount, ' item(s)\n                ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0, this.parentView._pipe_currency_0.transform)(this.parentView.context.cart.cartPrice, 'USD', true, '2.2-2')), '\n                ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_2, currVal_2))) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CartSummaryComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CartSummaryComponent2, renderType_CartSummaryComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                    (empty)\n                    ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
var renderType_CartSummaryComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CartSummaryComponent, {});
export class View_CartSummaryComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CartSummaryComponent0, renderType_CartSummaryComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_19 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'small', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            Your cart:\n            ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new import9.ViewContainer(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import14.TemplateRef_(this, 2, this._anchor_2);
        this._NgIf_2_6 = new import11.Wrapper_NgIf(this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new import9.ViewContainer(4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new import14.TemplateRef_(this, 4, this._anchor_4);
        this._NgIf_4_6 = new import11.Wrapper_NgIf(this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n                    ', null);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_7 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray8(6, 'class', 'btn btn-sm', 'role', 'button', 'routerLink', '/cart'), null);
        this._RouterLink_7_3 = new import12.Wrapper_RouterLink(this.parentView.injectorGet(import15.Router, this.parentIndex), this.parentView.injectorGet(import16.ActivatedRoute, this.parentIndex));
        this._text_8 = this.renderer.createText(this._el_7, '\n     ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_7, 'i', new import3.InlineArray2(2, 'class', 'fa fa-shopping-cart'), null);
        this._text_10 = this.renderer.createText(this._el_7, ' \n ', null);
        this._pipe_currency_0 = new import13.CurrencyPipe(this.parentView.injectorGet(import17.LOCALE_ID, this.parentIndex));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_7));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import18.NgIf) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === import14.TemplateRef) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === import18.NgIf) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === import19.RouterLink) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._RouterLink_7_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2_0_0 = (this.context.cart.itemCount > 0);
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        const currVal_4_0_0 = (this.context.cart.itemCount == 0);
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        const currVal_7_0_0 = '/cart';
        this._RouterLink_7_3.check_routerLink(currVal_7_0_0, throwOnChange, false);
        this._RouterLink_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        const currVal_19 = (this.context.cart.itemCount == 0);
        if (import3.checkBinding(throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setElementProperty(this._el_7, 'disabled', currVal_19);
            this._expr_19 = currVal_19;
        }
    }
    destroyInternal() {
        this._vc_2.destroyNestedViews();
        this._vc_4.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_CartSummaryComponent1(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 4)) {
            return new View_CartSummaryComponent2(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        return null;
    }
    handleEvent_7(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_7_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
//# sourceMappingURL=cartSummary.component.ngfactory.js.map