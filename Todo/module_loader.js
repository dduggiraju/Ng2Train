var paths = {
    "rxjs": "node_modules/rxjs",
    "@angular": "node_modules/@angular"
}
var packages = { 
    "app": {},
     'rxjs': { defaultExtension: 'js' } 
};
var angularModules = ["common", "compiler", "core", "forms", "http", "platform-browser", "platform-browser-dynamic"];
angularModules.forEach(function (pkg) {
    packages["@angular/" + pkg] = {
        main: "/bundles/" + pkg + ".umd.min.js"
    };
});
System.config({ map: paths, packages: packages });
System.import("app/main").catch(function (err) { console.error(err); });