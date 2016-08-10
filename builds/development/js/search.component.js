System.register(['angular2/core', 'angular2/common', 'angular2/router', './services/spotify.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, spotify_service_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (spotify_service_1_1) {
                spotify_service_1 = spotify_service_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(spotify, router, routeParams) {
                    this.spotify = spotify;
                    this.router = router;
                    this.routeParams = routeParams;
                    this.searchRequired = false;
                }
                SearchComponent.prototype.ngOnInit = function () {
                    this.search();
                };
                SearchComponent.prototype.searchreq = function () {
                    this.searchRequired = true;
                    console.log(this.vc);
                };
                SearchComponent.prototype.search = function () {
                    var _this = this;
                    var query = this.routeParams.get("query");
                    this.query = query;
                    if (!query) {
                        return;
                    }
                    this.spotify.searchTrack(query).subscribe(function (res) { return _this.renderResults(res); });
                };
                SearchComponent.prototype.renderResults = function (res) {
                    this.results = null;
                    if (res && res.tracks && res.tracks.items) {
                        this.results = res.tracks.items;
                    }
                };
                SearchComponent.prototype.submit = function (query) {
                    this.query = query;
                    this.router.navigate(['/Search', { query: query }]);
                    this.search();
                };
                __decorate([
                    core_1.ViewChildren('newquery'), 
                    __metadata('design:type', Object)
                ], SearchComponent.prototype, "vc", void 0);
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        directives: [router_1.RouterLink, common_1.CORE_DIRECTIVES],
                        templateUrl: 'partials/searchComponent.html',
                    }), 
                    __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.Router, router_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});

//# sourceMappingURL=search.component.js.map
