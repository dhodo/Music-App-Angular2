System.register(['angular2/core', 'angular2/router', './search.component', './artist.component', './album.component', './track.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, search_component_1, artist_component_1, album_component_1, track_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            },
            function (artist_component_1_1) {
                artist_component_1 = artist_component_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (track_component_1_1) {
                track_component_1 = track_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        template: "\n        <div class=\"app\">\n            <div class=\"back\" >\n            </div >\n            \n            <router-outlet></router-outlet>\n            \n        </div>\n\n    "
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'root', redirectTo: ['Search'] },
                        { path: '/search', name: 'Search', component: search_component_1.SearchComponent },
                        { path: '/artist:id', name: 'Artists', component: artist_component_1.ArtistComponent },
                        { path: '/album:id', name: 'Albums', component: album_component_1.AlbumComponent },
                        { path: '/track:id', name: 'Tracks', component: track_component_1.TrackComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
