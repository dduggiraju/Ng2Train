import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/http/src/http_module';
import * as import8 from '../../app/model/model.module';
import * as import9 from '@angular/router/src/router_module';
import * as import10 from '../../app/store/store.module';
import * as import11 from '@angular/common/src/localization';
import * as import12 from '@angular/core/src/application_init';
import * as import13 from '@angular/core/src/testability/testability';
import * as import14 from '@angular/core/src/application_ref';
import * as import15 from '@angular/core/src/linker/compiler';
import * as import16 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import17 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import18 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import19 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import20 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import21 from '@angular/core/src/animation/animation_queue';
import * as import22 from '@angular/core/src/linker/view_utils';
import * as import23 from '@angular/platform-browser/src/browser/title';
import * as import24 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import25 from '@angular/http/src/backends/browser_xhr';
import * as import26 from '@angular/http/src/base_response_options';
import * as import27 from '@angular/http/src/backends/xhr_backend';
import * as import28 from '@angular/http/src/base_request_options';
import * as import29 from '../../app/model/rest.datasource';
import * as import30 from '../../app/model/product.repository';
import * as import31 from '../../app/model/static.datasource';
import * as import32 from '../../app/model/cart.model';
import * as import33 from '../../app/model/order.model';
import * as import34 from '../../app/model/order.repository';
import * as import35 from '../../app/model/auth.service';
import * as import36 from '@angular/common/src/location/location';
import * as import37 from '@angular/router/src/url_tree';
import * as import38 from '@angular/router/src/router_outlet_map';
import * as import39 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import40 from '@angular/router/src/router_preloader';
import * as import41 from '../../app/storeFirst.gaurd';
import * as import43 from './store/store.component.ngfactory';
import * as import44 from './store/cartDetail.component.ngfactory';
import * as import45 from './store/checkout.component.ngfactory';
import * as import46 from './admin/auth.component.ngfactory';
import * as import47 from './admin/admin.component.ngfactory';
import * as import48 from './admin/productEditor.component.ngfactory';
import * as import49 from './admin/productTable.component.ngfactory';
import * as import50 from './admin/orderTable.component.ngfactory';
import * as import51 from './app.component.ngfactory';
import * as import52 from '@angular/core/src/i18n/tokens';
import * as import53 from '@angular/core/src/application_tokens';
import * as import54 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import55 from '@angular/platform-browser/src/dom/events/key_events';
import * as import56 from '@angular/core/src/zone/ng_zone';
import * as import57 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import58 from '@angular/common/src/location/platform_location';
import * as import59 from '@angular/common/src/location/location_strategy';
import * as import60 from '../../app/store/store.component';
import * as import61 from '../../app/store/cartDetail.component';
import * as import62 from '../../app/store/checkout.component';
import * as import63 from '../../app/admin/auth.component';
import * as import64 from '../../app/admin/admin.component';
import * as import65 from '../../app/admin/auth.guard';
import * as import66 from '../../app/admin/productEditor.component';
import * as import67 from '../../app/admin/productTable.component';
import * as import68 from '../../app/admin/orderTable.component';
import * as import69 from '@angular/router/src/url_handling_strategy';
import * as import70 from '@angular/router/src/route_reuse_strategy';
import * as import71 from '@angular/router/src/router';
import * as import72 from '@angular/core/src/console';
import * as import73 from '@angular/core/src/error_handler';
import * as import74 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import75 from '@angular/platform-browser/src/dom/animation_driver';
import * as import76 from '@angular/core/src/render/api';
import * as import77 from '@angular/core/src/security';
import * as import78 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import79 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import80 from '@angular/http/src/interfaces';
import * as import81 from '@angular/http/src/http';
import * as import82 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import83 from '@angular/router/src/router_config_loader';
import * as import84 from '@angular/router/src/router_state';
class AppModuleInjector extends import0.NgModuleInjector {
    constructor(parent) {
        super(parent, [
            import43.StoreComponentNgFactory,
            import44.CartDetailComponentNgFactory,
            import45.CheckoutComponentNgFactory,
            import46.AuthComponentNgFactory,
            import47.AdminComponentNgFactory,
            import48.ProductEditorComponentNgFactory,
            import49.ProductTableComponentNgFactory,
            import50.OrderTableComponentNgFactory,
            import51.AppComponentNgFactory
        ], [import51.AppComponentNgFactory]);
    }
    get _LOCALE_ID_11() {
        if ((this.__LOCALE_ID_11 == null)) {
            (this.__LOCALE_ID_11 = import3._localeFactory(this.parent.get(import52.LOCALE_ID, null)));
        }
        return this.__LOCALE_ID_11;
    }
    get _NgLocalization_12() {
        if ((this.__NgLocalization_12 == null)) {
            (this.__NgLocalization_12 = new import11.NgLocaleLocalization(this._LOCALE_ID_11));
        }
        return this.__NgLocalization_12;
    }
    get _ApplicationRef_19() {
        if ((this.__ApplicationRef_19 == null)) {
            (this.__ApplicationRef_19 = this._ApplicationRef__18);
        }
        return this.__ApplicationRef_19;
    }
    get _Compiler_20() {
        if ((this.__Compiler_20 == null)) {
            (this.__Compiler_20 = new import15.Compiler());
        }
        return this.__Compiler_20;
    }
    get _APP_ID_21() {
        if ((this.__APP_ID_21 == null)) {
            (this.__APP_ID_21 = import53._appIdRandomProviderFactory());
        }
        return this.__APP_ID_21;
    }
    get _DOCUMENT_22() {
        if ((this.__DOCUMENT_22 == null)) {
            (this.__DOCUMENT_22 = import4._document());
        }
        return this.__DOCUMENT_22;
    }
    get _HAMMER_GESTURE_CONFIG_23() {
        if ((this.__HAMMER_GESTURE_CONFIG_23 == null)) {
            (this.__HAMMER_GESTURE_CONFIG_23 = new import16.HammerGestureConfig());
        }
        return this.__HAMMER_GESTURE_CONFIG_23;
    }
    get _EVENT_MANAGER_PLUGINS_24() {
        if ((this.__EVENT_MANAGER_PLUGINS_24 == null)) {
            (this.__EVENT_MANAGER_PLUGINS_24 = [
                new import54.DomEventsPlugin(),
                new import55.KeyEventsPlugin(),
                new import16.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_23)
            ]);
        }
        return this.__EVENT_MANAGER_PLUGINS_24;
    }
    get _EventManager_25() {
        if ((this.__EventManager_25 == null)) {
            (this.__EventManager_25 = new import17.EventManager(this._EVENT_MANAGER_PLUGINS_24, this.parent.get(import56.NgZone)));
        }
        return this.__EventManager_25;
    }
    get _AnimationDriver_27() {
        if ((this.__AnimationDriver_27 == null)) {
            (this.__AnimationDriver_27 = import4._resolveDefaultAnimationDriver());
        }
        return this.__AnimationDriver_27;
    }
    get _DomRootRenderer_28() {
        if ((this.__DomRootRenderer_28 == null)) {
            (this.__DomRootRenderer_28 = new import19.DomRootRenderer_(this._DOCUMENT_22, this._EventManager_25, this._DomSharedStylesHost_26, this._AnimationDriver_27, this._APP_ID_21));
        }
        return this.__DomRootRenderer_28;
    }
    get _NgProbeToken_29() {
        if ((this.__NgProbeToken_29 == null)) {
            (this.__NgProbeToken_29 = [import9.routerNgProbeToken()]);
        }
        return this.__NgProbeToken_29;
    }
    get _RootRenderer_30() {
        if ((this.__RootRenderer_30 == null)) {
            (this.__RootRenderer_30 = import57._createConditionalRootRenderer(this._DomRootRenderer_28, this.parent.get(import57.NgProbeToken, null), this._NgProbeToken_29));
        }
        return this.__RootRenderer_30;
    }
    get _DomSanitizer_31() {
        if ((this.__DomSanitizer_31 == null)) {
            (this.__DomSanitizer_31 = new import20.DomSanitizerImpl());
        }
        return this.__DomSanitizer_31;
    }
    get _Sanitizer_32() {
        if ((this.__Sanitizer_32 == null)) {
            (this.__Sanitizer_32 = this._DomSanitizer_31);
        }
        return this.__Sanitizer_32;
    }
    get _AnimationQueue_33() {
        if ((this.__AnimationQueue_33 == null)) {
            (this.__AnimationQueue_33 = new import21.AnimationQueue(this.parent.get(import56.NgZone)));
        }
        return this.__AnimationQueue_33;
    }
    get _ViewUtils_34() {
        if ((this.__ViewUtils_34 == null)) {
            (this.__ViewUtils_34 = new import22.ViewUtils(this._RootRenderer_30, this._Sanitizer_32, this._AnimationQueue_33));
        }
        return this.__ViewUtils_34;
    }
    get _IterableDiffers_35() {
        if ((this.__IterableDiffers_35 == null)) {
            (this.__IterableDiffers_35 = import3._iterableDiffersFactory());
        }
        return this.__IterableDiffers_35;
    }
    get _KeyValueDiffers_36() {
        if ((this.__KeyValueDiffers_36 == null)) {
            (this.__KeyValueDiffers_36 = import3._keyValueDiffersFactory());
        }
        return this.__KeyValueDiffers_36;
    }
    get _SharedStylesHost_37() {
        if ((this.__SharedStylesHost_37 == null)) {
            (this.__SharedStylesHost_37 = this._DomSharedStylesHost_26);
        }
        return this.__SharedStylesHost_37;
    }
    get _Title_38() {
        if ((this.__Title_38 == null)) {
            (this.__Title_38 = new import23.Title());
        }
        return this.__Title_38;
    }
    get _RadioControlRegistry_39() {
        if ((this.__RadioControlRegistry_39 == null)) {
            (this.__RadioControlRegistry_39 = new import24.RadioControlRegistry());
        }
        return this.__RadioControlRegistry_39;
    }
    get _BrowserXhr_40() {
        if ((this.__BrowserXhr_40 == null)) {
            (this.__BrowserXhr_40 = new import25.BrowserXhr());
        }
        return this.__BrowserXhr_40;
    }
    get _ResponseOptions_41() {
        if ((this.__ResponseOptions_41 == null)) {
            (this.__ResponseOptions_41 = new import26.BaseResponseOptions());
        }
        return this.__ResponseOptions_41;
    }
    get _XSRFStrategy_42() {
        if ((this.__XSRFStrategy_42 == null)) {
            (this.__XSRFStrategy_42 = import7._createDefaultCookieXSRFStrategy());
        }
        return this.__XSRFStrategy_42;
    }
    get _XHRBackend_43() {
        if ((this.__XHRBackend_43 == null)) {
            (this.__XHRBackend_43 = new import27.XHRBackend(this._BrowserXhr_40, this._ResponseOptions_41, this._XSRFStrategy_42));
        }
        return this.__XHRBackend_43;
    }
    get _RequestOptions_44() {
        if ((this.__RequestOptions_44 == null)) {
            (this.__RequestOptions_44 = new import28.BaseRequestOptions());
        }
        return this.__RequestOptions_44;
    }
    get _Http_45() {
        if ((this.__Http_45 == null)) {
            (this.__Http_45 = import7.httpFactory(this._XHRBackend_43, this._RequestOptions_44));
        }
        return this.__Http_45;
    }
    get _RestDataSource_46() {
        if ((this.__RestDataSource_46 == null)) {
            (this.__RestDataSource_46 = new import29.RestDataSource(this._Http_45));
        }
        return this.__RestDataSource_46;
    }
    get _ProductRepository_47() {
        if ((this.__ProductRepository_47 == null)) {
            (this.__ProductRepository_47 = new import30.ProductRepository(this._RestDataSource_46));
        }
        return this.__ProductRepository_47;
    }
    get _StaticDataSource_48() {
        if ((this.__StaticDataSource_48 == null)) {
            (this.__StaticDataSource_48 = new import31.StaticDataSource());
        }
        return this.__StaticDataSource_48;
    }
    get _Cart_49() {
        if ((this.__Cart_49 == null)) {
            (this.__Cart_49 = new import32.Cart());
        }
        return this.__Cart_49;
    }
    get _Order_50() {
        if ((this.__Order_50 == null)) {
            (this.__Order_50 = new import33.Order(this._Cart_49));
        }
        return this.__Order_50;
    }
    get _OrderRepository_51() {
        if ((this.__OrderRepository_51 == null)) {
            (this.__OrderRepository_51 = new import34.OrderRepository(this._RestDataSource_46));
        }
        return this.__OrderRepository_51;
    }
    get _AuthService_52() {
        if ((this.__AuthService_52 == null)) {
            (this.__AuthService_52 = new import35.AuthService(this._RestDataSource_46));
        }
        return this.__AuthService_52;
    }
    get _ROUTER_CONFIGURATION_53() {
        if ((this.__ROUTER_CONFIGURATION_53 == null)) {
            (this.__ROUTER_CONFIGURATION_53 = {});
        }
        return this.__ROUTER_CONFIGURATION_53;
    }
    get _LocationStrategy_54() {
        if ((this.__LocationStrategy_54 == null)) {
            (this.__LocationStrategy_54 = import9.provideLocationStrategy(this.parent.get(import58.PlatformLocation), this.parent.get(import59.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_53));
        }
        return this.__LocationStrategy_54;
    }
    get _Location_55() {
        if ((this.__Location_55 == null)) {
            (this.__Location_55 = new import36.Location(this._LocationStrategy_54));
        }
        return this.__Location_55;
    }
    get _UrlSerializer_56() {
        if ((this.__UrlSerializer_56 == null)) {
            (this.__UrlSerializer_56 = new import37.DefaultUrlSerializer());
        }
        return this.__UrlSerializer_56;
    }
    get _RouterOutletMap_57() {
        if ((this.__RouterOutletMap_57 == null)) {
            (this.__RouterOutletMap_57 = new import38.RouterOutletMap());
        }
        return this.__RouterOutletMap_57;
    }
    get _NgModuleFactoryLoader_58() {
        if ((this.__NgModuleFactoryLoader_58 == null)) {
            (this.__NgModuleFactoryLoader_58 = new import39.SystemJsNgModuleLoader(this._Compiler_20, this.parent.get(import39.SystemJsNgModuleLoaderConfig, null)));
        }
        return this.__NgModuleFactoryLoader_58;
    }
    get _ROUTES_59() {
        if ((this.__ROUTES_59 == null)) {
            (this.__ROUTES_59 = [[
                    {
                        path: 'store',
                        component: import60.StoreComponent,
                        canActivate: [import41.StoreFirstGuard]
                    },
                    {
                        path: 'cart',
                        component: import61.CartDetailComponent,
                        canActivate: [import41.StoreFirstGuard]
                    },
                    {
                        path: 'checkout',
                        component: import62.CheckoutComponent,
                        canActivate: [import41.StoreFirstGuard]
                    },
                    {
                        path: 'admin',
                        children: [
                            {
                                path: 'auth',
                                component: import63.AuthComponent
                            },
                            {
                                path: 'main',
                                component: import64.AdminComponent,
                                canActivate: [import65.AuthGuard],
                                children: [
                                    {
                                        path: 'products/:mode/:id',
                                        component: import66.ProductEditorComponent
                                    },
                                    {
                                        path: 'products/:mode',
                                        component: import66.ProductEditorComponent
                                    },
                                    {
                                        path: 'products',
                                        component: import67.ProductTableComponent
                                    },
                                    {
                                        path: 'orders',
                                        component: import68.OrderTableComponent
                                    },
                                    {
                                        path: '**',
                                        redirectTo: 'products'
                                    }
                                ]
                            },
                            {
                                path: '**',
                                redirectTo: 'auth'
                            }
                        ],
                        canActivate: [import41.StoreFirstGuard]
                    },
                    {
                        path: '**',
                        redirectTo: '/store'
                    }
                ]
            ]);
        }
        return this.__ROUTES_59;
    }
    get _Router_60() {
        if ((this.__Router_60 == null)) {
            (this.__Router_60 = import9.setupRouter(this._ApplicationRef_19, this._UrlSerializer_56, this._RouterOutletMap_57, this._Location_55, this, this._NgModuleFactoryLoader_58, this._Compiler_20, this._ROUTES_59, this._ROUTER_CONFIGURATION_53, this.parent.get(import69.UrlHandlingStrategy, null), this.parent.get(import70.RouteReuseStrategy, null)));
        }
        return this.__Router_60;
    }
    get _ActivatedRoute_61() {
        if ((this.__ActivatedRoute_61 == null)) {
            (this.__ActivatedRoute_61 = import9.rootRoute(this._Router_60));
        }
        return this.__ActivatedRoute_61;
    }
    get _PreloadAllModules_65() {
        if ((this.__PreloadAllModules_65 == null)) {
            (this.__PreloadAllModules_65 = new import40.PreloadAllModules());
        }
        return this.__PreloadAllModules_65;
    }
    get _ROUTER_INITIALIZER_66() {
        if ((this.__ROUTER_INITIALIZER_66 == null)) {
            (this.__ROUTER_INITIALIZER_66 = import9.getBootstrapListener(this._RouterInitializer_14));
        }
        return this.__ROUTER_INITIALIZER_66;
    }
    get _APP_BOOTSTRAP_LISTENER_67() {
        if ((this.__APP_BOOTSTRAP_LISTENER_67 == null)) {
            (this.__APP_BOOTSTRAP_LISTENER_67 = [this._ROUTER_INITIALIZER_66]);
        }
        return this.__APP_BOOTSTRAP_LISTENER_67;
    }
    get _StoreFirstGuard_68() {
        if ((this.__StoreFirstGuard_68 == null)) {
            (this.__StoreFirstGuard_68 = new import41.StoreFirstGuard(this._Router_60));
        }
        return this.__StoreFirstGuard_68;
    }
    createInternal() {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
        this._FormsModule_4 = new import6.FormsModule();
        this._HttpModule_5 = new import7.HttpModule();
        this._ModelModule_6 = new import8.ModelModule();
        this._ROUTER_FORROOT_GUARD_7 = import9.provideForRootGuard(this.parent.get(import71.Router, null));
        this._RouterModule_8 = new import9.RouterModule(this._ROUTER_FORROOT_GUARD_7);
        this._StoreModule_9 = new import10.StoreModule();
        this._AppModule_10 = new import1.AppModule();
        this._ErrorHandler_13 = import4.errorHandler();
        this._RouterInitializer_14 = new import9.RouterInitializer(this);
        this._APP_INITIALIZER_15 = [import9.getAppInitializer(this._RouterInitializer_14)];
        this._ApplicationInitStatus_16 = new import12.ApplicationInitStatus(this._APP_INITIALIZER_15);
        this._Testability_17 = new import13.Testability(this.parent.get(import56.NgZone));
        this._ApplicationRef__18 = new import14.ApplicationRef_(this.parent.get(import56.NgZone), this.parent.get(import72.Console), this, this._ErrorHandler_13, this, this._ApplicationInitStatus_16, this.parent.get(import13.TestabilityRegistry, null), this._Testability_17);
        this._DomSharedStylesHost_26 = new import18.DomSharedStylesHost(this._DOCUMENT_22);
        this._NoPreloading_62 = new import40.NoPreloading();
        this._PreloadingStrategy_63 = this._NoPreloading_62;
        this._RouterPreloader_64 = new import40.RouterPreloader(this._Router_60, this._NgModuleFactoryLoader_58, this._Compiler_20, this, this._PreloadingStrategy_63);
        return this._AppModule_10;
    }
    getInternal(token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === import6.FormsModule)) {
            return this._FormsModule_4;
        }
        if ((token === import7.HttpModule)) {
            return this._HttpModule_5;
        }
        if ((token === import8.ModelModule)) {
            return this._ModelModule_6;
        }
        if ((token === import9.ROUTER_FORROOT_GUARD)) {
            return this._ROUTER_FORROOT_GUARD_7;
        }
        if ((token === import9.RouterModule)) {
            return this._RouterModule_8;
        }
        if ((token === import10.StoreModule)) {
            return this._StoreModule_9;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_10;
        }
        if ((token === import52.LOCALE_ID)) {
            return this._LOCALE_ID_11;
        }
        if ((token === import11.NgLocalization)) {
            return this._NgLocalization_12;
        }
        if ((token === import73.ErrorHandler)) {
            return this._ErrorHandler_13;
        }
        if ((token === import9.RouterInitializer)) {
            return this._RouterInitializer_14;
        }
        if ((token === import12.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_15;
        }
        if ((token === import12.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_16;
        }
        if ((token === import13.Testability)) {
            return this._Testability_17;
        }
        if ((token === import14.ApplicationRef_)) {
            return this._ApplicationRef__18;
        }
        if ((token === import14.ApplicationRef)) {
            return this._ApplicationRef_19;
        }
        if ((token === import15.Compiler)) {
            return this._Compiler_20;
        }
        if ((token === import53.APP_ID)) {
            return this._APP_ID_21;
        }
        if ((token === import74.DOCUMENT)) {
            return this._DOCUMENT_22;
        }
        if ((token === import16.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_23;
        }
        if ((token === import17.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_24;
        }
        if ((token === import17.EventManager)) {
            return this._EventManager_25;
        }
        if ((token === import18.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_26;
        }
        if ((token === import75.AnimationDriver)) {
            return this._AnimationDriver_27;
        }
        if ((token === import19.DomRootRenderer)) {
            return this._DomRootRenderer_28;
        }
        if ((token === import14.NgProbeToken)) {
            return this._NgProbeToken_29;
        }
        if ((token === import76.RootRenderer)) {
            return this._RootRenderer_30;
        }
        if ((token === import20.DomSanitizer)) {
            return this._DomSanitizer_31;
        }
        if ((token === import77.Sanitizer)) {
            return this._Sanitizer_32;
        }
        if ((token === import21.AnimationQueue)) {
            return this._AnimationQueue_33;
        }
        if ((token === import22.ViewUtils)) {
            return this._ViewUtils_34;
        }
        if ((token === import78.IterableDiffers)) {
            return this._IterableDiffers_35;
        }
        if ((token === import79.KeyValueDiffers)) {
            return this._KeyValueDiffers_36;
        }
        if ((token === import18.SharedStylesHost)) {
            return this._SharedStylesHost_37;
        }
        if ((token === import23.Title)) {
            return this._Title_38;
        }
        if ((token === import24.RadioControlRegistry)) {
            return this._RadioControlRegistry_39;
        }
        if ((token === import25.BrowserXhr)) {
            return this._BrowserXhr_40;
        }
        if ((token === import26.ResponseOptions)) {
            return this._ResponseOptions_41;
        }
        if ((token === import80.XSRFStrategy)) {
            return this._XSRFStrategy_42;
        }
        if ((token === import27.XHRBackend)) {
            return this._XHRBackend_43;
        }
        if ((token === import28.RequestOptions)) {
            return this._RequestOptions_44;
        }
        if ((token === import81.Http)) {
            return this._Http_45;
        }
        if ((token === import29.RestDataSource)) {
            return this._RestDataSource_46;
        }
        if ((token === import30.ProductRepository)) {
            return this._ProductRepository_47;
        }
        if ((token === import31.StaticDataSource)) {
            return this._StaticDataSource_48;
        }
        if ((token === import32.Cart)) {
            return this._Cart_49;
        }
        if ((token === import33.Order)) {
            return this._Order_50;
        }
        if ((token === import34.OrderRepository)) {
            return this._OrderRepository_51;
        }
        if ((token === import35.AuthService)) {
            return this._AuthService_52;
        }
        if ((token === import9.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_53;
        }
        if ((token === import59.LocationStrategy)) {
            return this._LocationStrategy_54;
        }
        if ((token === import36.Location)) {
            return this._Location_55;
        }
        if ((token === import37.UrlSerializer)) {
            return this._UrlSerializer_56;
        }
        if ((token === import38.RouterOutletMap)) {
            return this._RouterOutletMap_57;
        }
        if ((token === import82.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_58;
        }
        if ((token === import83.ROUTES)) {
            return this._ROUTES_59;
        }
        if ((token === import71.Router)) {
            return this._Router_60;
        }
        if ((token === import84.ActivatedRoute)) {
            return this._ActivatedRoute_61;
        }
        if ((token === import40.NoPreloading)) {
            return this._NoPreloading_62;
        }
        if ((token === import40.PreloadingStrategy)) {
            return this._PreloadingStrategy_63;
        }
        if ((token === import40.RouterPreloader)) {
            return this._RouterPreloader_64;
        }
        if ((token === import40.PreloadAllModules)) {
            return this._PreloadAllModules_65;
        }
        if ((token === import9.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_66;
        }
        if ((token === import53.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_67;
        }
        if ((token === import41.StoreFirstGuard)) {
            return this._StoreFirstGuard_68;
        }
        return notFoundResult;
    }
    destroyInternal() {
        this._ApplicationRef__18.ngOnDestroy();
        this._DomSharedStylesHost_26.ngOnDestroy();
        this._RouterPreloader_64.ngOnDestroy();
    }
}
export const AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map