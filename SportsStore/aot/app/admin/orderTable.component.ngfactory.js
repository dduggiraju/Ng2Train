import * as import0 from '../../../app/admin/orderTable.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/order.repository';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/common/src/directives/ng_for';
import * as import15 from '../../node_modules/@angular/forms/src/directives/checkbox_value_accessor.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/forms/src/directives/checkbox_value_accessor';
import * as import21 from '@angular/forms/src/directives/control_value_accessor';
import * as import22 from '@angular/forms/src/directives/ng_model';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '@angular/forms/src/directives/ng_control_status';
import * as import25 from '@angular/common/src/directives/ng_if';
export class Wrapper_OrderTableComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.OrderTableComponent(p0);
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
var renderType_OrderTableComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_OrderTableComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_OrderTableComponent_Host0, renderType_OrderTableComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_OrderTableComponent0(this.viewUtils, this, 0, this._el_0);
        this._OrderTableComponent_0_3 = new Wrapper_OrderTableComponent(this.injectorGet(import8.OrderRepository, this.parentIndex));
        this.compView_0.create(this._OrderTableComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._OrderTableComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.OrderTableComponent) && (0 === requestNodeIndex))) {
            return this._OrderTableComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._OrderTableComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const OrderTableComponentNgFactory = new import7.ComponentFactory('ng-component', View_OrderTableComponent_Host0, import0.OrderTableComponent);
const styles_OrderTableComponent = [];
class View_OrderTableComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_OrderTableComponent1, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'colspan', '5'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'There are no orders', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n        ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_OrderTableComponent3 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_OrderTableComponent3, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_10 = import10.UNINITIALIZED;
        this._expr_11 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'colspan', '2'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_10 = import3.inlineInterpolate(1, '', this.context.$implicit.product.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setText(this._text_5, currVal_10);
            this._expr_10 = currVal_10;
        }
        const currVal_11 = import3.inlineInterpolate(1, '', this.context.$implicit.quantity, '');
        if (import3.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this.renderer.setText(this._text_8, currVal_11);
            this._expr_11 = currVal_11;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_OrderTableComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_OrderTableComponent2, renderType_OrderTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_30 = import10.UNINITIALIZED;
        this._expr_31 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._text_0 = this.renderer.createText(null, '\n            ', null);
        this._el_1 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_2 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this._text_5 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_1, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Product', null);
        this._text_11 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_1, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Quantity', null);
        this._text_14 = this.renderer.createText(this._el_1, '\n                ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_1, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'button', new import3.InlineArray2(2, 'class', 'btn btn-warning'), null);
        this._text_18 = this.renderer.createText(this._el_17, ' Ship ', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n                    ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_15, 'button', new import3.InlineArray2(2, 'class', 'btn btn-danger'), null);
        this._text_21 = this.renderer.createText(this._el_20, ' Delete ', null);
        this._text_22 = this.renderer.createText(this._el_15, '\n                ', null);
        this._text_23 = this.renderer.createText(this._el_1, '\n            ', null);
        this._text_24 = this.renderer.createText(null, '\n            ', null);
        this._anchor_25 = this.renderer.createTemplateAnchor(null, null);
        this._vc_25 = new import9.ViewContainer(25, null, this, this._anchor_25);
        this._TemplateRef_25_5 = new import12.TemplateRef_(this, 25, this._anchor_25);
        this._NgFor_25_6 = new import11.Wrapper_NgFor(this._vc_25.vcRef, this._TemplateRef_25_5, this.parentView.parentView.injectorGet(import13.IterableDiffers, this.parentView.parentIndex), this.parentView.ref);
        this._text_26 = this.renderer.createText(null, '\n        ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_17));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_20, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_20));
        this.init(this._text_26, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._anchor_25,
            this._text_26
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import12.TemplateRef) && (25 === requestNodeIndex))) {
            return this._TemplateRef_25_5;
        }
        if (((token === import14.NgFor) && (25 === requestNodeIndex))) {
            return this._NgFor_25_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_25_0_0 = this.context.$implicit.cart.lines;
        this._NgFor_25_6.check_ngForOf(currVal_25_0_0, throwOnChange, false);
        this._NgFor_25_6.ngDoCheck(this, this._anchor_25, throwOnChange);
        this._vc_25.detectChangesInNestedViews(throwOnChange);
        const currVal_30 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_30, currVal_30)) {
            this.renderer.setText(this._text_4, currVal_30);
            this._expr_30 = currVal_30;
        }
        const currVal_31 = import3.inlineInterpolate(1, '', this.context.$implicit.zip, '');
        if (import3.checkBinding(throwOnChange, this._expr_31, currVal_31)) {
            this.renderer.setText(this._text_7, currVal_31);
            this._expr_31 = currVal_31;
        }
    }
    destroyInternal() {
        this._vc_25.destroyNestedViews();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._text_0, ctx);
        cb(this._el_1, ctx);
        cb(this._text_24, ctx);
        cb(this._vc_25.nativeElement, ctx);
        this._vc_25.visitNestedViewRootNodes(cb, ctx);
        cb(this._text_26, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 25)) {
            return new View_OrderTableComponent3(this.viewUtils, this, 25, this._anchor_25, this._vc_25);
        }
        return null;
    }
    handleEvent_17(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.markShipped(this.context.$implicit) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_20(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.delete(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
var renderType_OrderTableComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_OrderTableComponent, {});
export class View_OrderTableComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_OrderTableComponent0, renderType_OrderTableComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'form-check'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'label', new import3.InlineArray2(2, 'class', 'form-check-label'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'input', new import3.InlineArray4(4, 'class', 'form-check-input', 'type', 'checkbox'), null);
        this._CheckboxControlValueAccessor_4_3 = new import15.Wrapper_CheckboxControlValueAccessor(this.renderer, new import19.ElementRef(this._el_4));
        this._NG_VALUE_ACCESSOR_4_4 = [this._CheckboxControlValueAccessor_4_3.context];
        this._NgModel_4_5 = new import16.Wrapper_NgModel(null, null, null, this._NG_VALUE_ACCESSOR_4_4);
        this._NgControl_4_6 = this._NgModel_4_5.context;
        this._NgControlStatus_4_7 = new import17.Wrapper_NgControlStatus(this._NgControl_4_6);
        this._text_5 = this.renderer.createText(this._el_2, '\nDisplay Shipped Orders\n', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'table table-sm'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Name', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Zip', null);
        this._text_19 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_12, 'th', new import3.InlineArray2(2, 'colspan', '2'), null);
        this._text_21 = this.renderer.createText(this._el_20, 'Cart', null);
        this._text_22 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_12, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_24 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_25 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_8, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_28 = this.renderer.createText(this._el_27, '\n        ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._vc_29 = new import9.ViewContainer(29, 27, this, this._anchor_29);
        this._TemplateRef_29_5 = new import12.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import18.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_27, '\n        ', null);
        this._anchor_31 = this.renderer.createTemplateAnchor(this._el_27, null);
        this._vc_31 = new import9.ViewContainer(31, 27, this, this._anchor_31);
        this._TemplateRef_31_5 = new import12.TemplateRef_(this, 31, this._anchor_31);
        this._NgFor_31_6 = new import11.Wrapper_NgFor(this._vc_31.vcRef, this._TemplateRef_31_5, this.parentView.injectorGet(import13.IterableDiffers, this.parentIndex), this.ref);
        this._text_32 = this.renderer.createText(this._el_27, '\n    ', null);
        this._text_33 = this.renderer.createText(this._el_8, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray8(6, 'ngModelChange', null, 'change', null, 'blur', null), this.eventHandler(this.handleEvent_4));
        this._NgModel_4_5.subscribe(this, this.eventHandler(this.handleEvent_4), true);
        this.init(null, (this.renderer.directRenderer ? null : [
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
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._anchor_31,
            this._text_32,
            this._text_33
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import20.CheckboxControlValueAccessor) && (4 === requestNodeIndex))) {
            return this._CheckboxControlValueAccessor_4_3.context;
        }
        if (((token === import21.NG_VALUE_ACCESSOR) && (4 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_4_4;
        }
        if (((token === import22.NgModel) && (4 === requestNodeIndex))) {
            return this._NgModel_4_5.context;
        }
        if (((token === import23.NgControl) && (4 === requestNodeIndex))) {
            return this._NgControl_4_6;
        }
        if (((token === import24.NgControlStatus) && (4 === requestNodeIndex))) {
            return this._NgControlStatus_4_7.context;
        }
        if (((token === import12.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import25.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import12.TemplateRef) && (31 === requestNodeIndex))) {
            return this._TemplateRef_31_5;
        }
        if (((token === import14.NgFor) && (31 === requestNodeIndex))) {
            return this._NgFor_31_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CheckboxControlValueAccessor_4_3.ngDoCheck(this, this._el_4, throwOnChange);
        const currVal_4_1_0 = this.context.includeShipped;
        this._NgModel_4_5.check_model(currVal_4_1_0, throwOnChange, false);
        this._NgModel_4_5.ngDoCheck(this, this._el_4, throwOnChange);
        this._NgControlStatus_4_7.ngDoCheck(this, this._el_4, throwOnChange);
        const currVal_29_0_0 = (this.context.getOrders().length == 0);
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        const currVal_31_0_0 = this.context.getOrders();
        this._NgFor_31_6.check_ngForOf(currVal_31_0_0, throwOnChange, false);
        this._NgFor_31_6.ngDoCheck(this, this._anchor_31, throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_31.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatus_4_7.checkHost(this, this, this._el_4, throwOnChange);
    }
    destroyInternal() {
        this._vc_29.destroyNestedViews();
        this._vc_31.destroyNestedViews();
        this._NgModel_4_5.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 29)) {
            return new View_OrderTableComponent1(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 31)) {
            return new View_OrderTableComponent2(this.viewUtils, this, 31, this._anchor_31, this._vc_31);
        }
        return null;
    }
    handleEvent_4(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._CheckboxControlValueAccessor_4_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.includeShipped = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
//# sourceMappingURL=orderTable.component.ngfactory.js.map