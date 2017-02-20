import * as import0 from '../../../app/admin/auth.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/router/src/router';
import * as import9 from '../../../app/model/auth.service';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import13 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import14 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import15 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import16 from '../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import18 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import19 from '@angular/core/src/linker/template_ref';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from '@angular/router/src/router_state';
import * as import22 from '@angular/common/src/directives/ng_if';
import * as import23 from '@angular/forms/src/directives/default_value_accessor';
import * as import24 from '@angular/forms/src/directives/validators';
import * as import25 from '@angular/forms/src/validators';
import * as import26 from '@angular/forms/src/directives/control_value_accessor';
import * as import27 from '@angular/forms/src/directives/ng_model';
import * as import28 from '@angular/forms/src/directives/ng_control';
import * as import29 from '@angular/forms/src/directives/ng_control_status';
import * as import30 from '@angular/router/src/directives/router_link';
import * as import31 from '@angular/forms/src/directives/ng_form';
import * as import32 from '@angular/forms/src/directives/control_container';
export class Wrapper_AuthComponent {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.AuthComponent(p0, p1);
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
var renderType_AuthComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_AuthComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AuthComponent_Host0, renderType_AuthComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AuthComponent0(this.viewUtils, this, 0, this._el_0);
        this._AuthComponent_0_3 = new Wrapper_AuthComponent(this.injectorGet(import8.Router, this.parentIndex), this.injectorGet(import9.AuthService, this.parentIndex));
        this.compView_0.create(this._AuthComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AuthComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AuthComponent) && (0 === requestNodeIndex))) {
            return this._AuthComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AuthComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AuthComponentNgFactory = new import7.ComponentFactory('ng-component', View_AuthComponent_Host0, import0.AuthComponent);
const styles_AuthComponent = [];
class View_AuthComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_AuthComponent1, renderType_AuthComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_2 = import11.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'bg-danger m-t-1 p-a-1 text-xs-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_2 = import3.inlineInterpolate(1, '\n    ', this.parentView.context.errorMessage, '\n');
        if (import3.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
var renderType_AuthComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AuthComponent, {});
export class View_AuthComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AuthComponent0, renderType_AuthComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'bg-info p-a-1 text-xs-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h3', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'SportsStore Admin', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new import10.ViewContainer(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import19.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import12.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'p-a-1'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'form', new import3.InlineArray2(2, 'novalidate', ''), null);
        this._NgForm_10_3 = new import13.Wrapper_NgForm(null, null);
        this._ControlContainer_10_4 = this._NgForm_10_3.context;
        this._NgControlStatusGroup_10_5 = new import14.Wrapper_NgControlStatusGroup(this._ControlContainer_10_4);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Name', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n            ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_12, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'username', 'required', ''), null);
        this._DefaultValueAccessor_17_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_17));
        this._RequiredValidator_17_4 = new import16.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_17_5 = [this._RequiredValidator_17_4.context];
        this._NG_VALUE_ACCESSOR_17_6 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_7 = new import17.Wrapper_NgModel(this._ControlContainer_10_4, this._NG_VALIDATORS_17_5, null, this._NG_VALUE_ACCESSOR_17_6);
        this._NgControl_17_8 = this._NgModel_17_7.context;
        this._NgControlStatus_17_9 = new import14.Wrapper_NgControlStatus(this._NgControl_17_8);
        this._text_18 = this.renderer.createText(this._el_12, '\n        ', null);
        this._text_19 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_21 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_20, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, 'Password', null);
        this._text_24 = this.renderer.createText(this._el_20, '\n            ', null);
        this._el_25 = import3.createRenderElement(this.renderer, this._el_20, 'input', new import3.InlineArray8(8, 'class', 'form-control', 'name', 'password', 'required', '', 'type', 'password'), null);
        this._DefaultValueAccessor_25_3 = new import15.Wrapper_DefaultValueAccessor(this.renderer, new import20.ElementRef(this._el_25));
        this._RequiredValidator_25_4 = new import16.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_25_5 = [this._RequiredValidator_25_4.context];
        this._NG_VALUE_ACCESSOR_25_6 = [this._DefaultValueAccessor_25_3.context];
        this._NgModel_25_7 = new import17.Wrapper_NgModel(this._ControlContainer_10_4, this._NG_VALIDATORS_25_5, null, this._NG_VALUE_ACCESSOR_25_6);
        this._NgControl_25_8 = this._NgModel_25_7.context;
        this._NgControlStatus_25_9 = new import14.Wrapper_NgControlStatus(this._NgControl_25_8);
        this._text_26 = this.renderer.createText(this._el_20, '\n        ', null);
        this._text_27 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_28 = import3.createRenderElement(this.renderer, this._el_10, 'div', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_29 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_30 = import3.createRenderElement(this.renderer, this._el_28, 'button', new import3.InlineArray8(6, 'class', 'btn btn-secondary', 'routerLink', '/', 'type', 'button'), null);
        this._RouterLink_30_3 = new import18.Wrapper_RouterLink(this.parentView.injectorGet(import8.Router, this.parentIndex), this.parentView.injectorGet(import21.ActivatedRoute, this.parentIndex));
        this._text_31 = this.renderer.createText(this._el_30, 'Go back', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n            ', null);
        this._el_33 = import3.createRenderElement(this.renderer, this._el_28, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'submit'), null);
        this._text_34 = this.renderer.createText(this._el_33, 'Log In', null);
        this._text_35 = this.renderer.createText(this._el_28, '\n        ', null);
        this._text_36 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_37 = this.renderer.createText(this._el_8, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_10, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_10));
        this._NgForm_10_3.subscribe(this, this.eventHandler(this.handleEvent_10), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_7.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_25, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_25));
        this._NgModel_25_7.subscribe(this, this.eventHandler(this.handleEvent_25), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_30, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_30));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
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
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
            this._text_37
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import19.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import22.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import23.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import24.RequiredValidator) && (17 === requestNodeIndex))) {
            return this._RequiredValidator_17_4.context;
        }
        if (((token === import25.NG_VALIDATORS) && (17 === requestNodeIndex))) {
            return this._NG_VALIDATORS_17_5;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_6;
        }
        if (((token === import27.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_7.context;
        }
        if (((token === import28.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_8;
        }
        if (((token === import29.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_9.context;
        }
        if (((token === import23.DefaultValueAccessor) && (25 === requestNodeIndex))) {
            return this._DefaultValueAccessor_25_3.context;
        }
        if (((token === import24.RequiredValidator) && (25 === requestNodeIndex))) {
            return this._RequiredValidator_25_4.context;
        }
        if (((token === import25.NG_VALIDATORS) && (25 === requestNodeIndex))) {
            return this._NG_VALIDATORS_25_5;
        }
        if (((token === import26.NG_VALUE_ACCESSOR) && (25 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_25_6;
        }
        if (((token === import27.NgModel) && (25 === requestNodeIndex))) {
            return this._NgModel_25_7.context;
        }
        if (((token === import28.NgControl) && (25 === requestNodeIndex))) {
            return this._NgControl_25_8;
        }
        if (((token === import29.NgControlStatus) && (25 === requestNodeIndex))) {
            return this._NgControlStatus_25_9.context;
        }
        if (((token === import30.RouterLink) && ((30 <= requestNodeIndex) && (requestNodeIndex <= 31)))) {
            return this._RouterLink_30_3.context;
        }
        if (((token === import31.NgForm) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._NgForm_10_3.context;
        }
        if (((token === import32.ControlContainer) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._ControlContainer_10_4;
        }
        if (((token === import29.NgControlStatusGroup) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 36)))) {
            return this._NgControlStatusGroup_10_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_6_0_0 = (this.context.errorMessage != null);
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._NgForm_10_3.ngDoCheck(this, this._el_10, throwOnChange);
        this._NgControlStatusGroup_10_5.ngDoCheck(this, this._el_10, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        const currVal_17_1_0 = '';
        this._RequiredValidator_17_4.check_required(currVal_17_1_0, throwOnChange, false);
        this._RequiredValidator_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        const currVal_17_2_0 = 'username';
        this._NgModel_17_7.check_name(currVal_17_2_0, throwOnChange, false);
        const currVal_17_2_1 = this.context.username;
        this._NgModel_17_7.check_model(currVal_17_2_1, throwOnChange, false);
        this._NgModel_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.ngDoCheck(this, this._el_17, throwOnChange);
        this._DefaultValueAccessor_25_3.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_25_1_0 = '';
        this._RequiredValidator_25_4.check_required(currVal_25_1_0, throwOnChange, false);
        this._RequiredValidator_25_4.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_25_2_0 = 'password';
        this._NgModel_25_7.check_name(currVal_25_2_0, throwOnChange, false);
        const currVal_25_2_1 = this.context.password;
        this._NgModel_25_7.check_model(currVal_25_2_1, throwOnChange, false);
        this._NgModel_25_7.ngDoCheck(this, this._el_25, throwOnChange);
        this._NgControlStatus_25_9.ngDoCheck(this, this._el_25, throwOnChange);
        const currVal_30_0_0 = '/';
        this._RouterLink_30_3.check_routerLink(currVal_30_0_0, throwOnChange, false);
        this._RouterLink_30_3.ngDoCheck(this, this._el_30, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_10_5.checkHost(this, this, this._el_10, throwOnChange);
        this._RequiredValidator_17_4.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.checkHost(this, this, this._el_17, throwOnChange);
        this._RequiredValidator_25_4.checkHost(this, this, this._el_25, throwOnChange);
        this._NgControlStatus_25_9.checkHost(this, this, this._el_25, throwOnChange);
    }
    destroyInternal() {
        this._vc_6.destroyNestedViews();
        this._NgModel_17_7.ngOnDestroy();
        this._NgModel_25_7.ngOnDestroy();
        this._NgForm_10_3.ngOnDestroy();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_AuthComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    }
    handleEvent_10(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_10_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            const pd_sub_0 = (this.context.authenticate(this._NgForm_10_3.context) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_17(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.username = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_25(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_25_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.context.password = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_30(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_30_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
//# sourceMappingURL=auth.component.ngfactory.js.map