var require = {
    waitSeconds: 0,
    paths: {
        'jquery':'node_modules/jquery/dist/jquery',       
        'bootstrap': 'node_modules/bootstrap/dist/js/bootstrap',
        'angular': 'node_modules/angular/angular',
        'angular-ui-router': 'node_modules/angular-ui-router/release/angular-ui-router',
        'domReady': 'node_modules/requirejs-domready/domReady'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angular-ui-router': { deps: ['angular'] },
        'angular-couch-potato': { deps: ['angular'] },
    },
    priority: [
        'jquery',
        'bootstrap',
        'angular'
    ]
};