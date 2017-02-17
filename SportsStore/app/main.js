"use strict";
//import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//import { AppModule } from "./app.module";
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const app_module_ngfactory_1 = require("../aot/app/app.module.ngfactory");
core_1.enableProdMode();
//platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=main.js.map