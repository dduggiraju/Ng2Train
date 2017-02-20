import * as import0 from '../../../app/store/counter.directive';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import3 from '@angular/core/src/linker/view_utils';
export class Wrapper_CounterDirective {
    constructor(p0, p1) {
        this._changed = false;
        this._changes = {};
        this.context = new import0.CounterDirective(p0, p1);
        this._expr_0 = import1.UNINITIALIZED;
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    check_counter(currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.counter = currValue;
            this._changes['counter'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
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
//# sourceMappingURL=counter.directive.ngfactory.js.map