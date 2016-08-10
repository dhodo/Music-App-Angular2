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
    var AlbumComponent;
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
            AlbumComponent = (function () {
                function AlbumComponent(_routeParams, _spotify, _locationstrategy) {
                    this._routeParams = _routeParams;
                    this._spotify = _spotify;
                    this._locationstrategy = _locationstrategy;
                    console.log("Constructor");
                }
                AlbumComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("In ngOnInit");
                    this.id = this._routeParams.get("id");
                    if (!this.id) {
                        console.log("ID IS NULL");
                        return;
                    }
                    this._spotify.getAlbum(this.id).subscribe(function (res) { return _this.renderAlbum(res); });
                };
                AlbumComponent.prototype.back = function () {
                    this._locationstrategy.back();
                };
                AlbumComponent.prototype.renderAlbum = function (res) {
                    this.album = res;
                };
                AlbumComponent = __decorate([
                    core_1.Component({
                        selector: 'album',
                        directives: [common_1.CORE_DIRECTIVES, router_1.RouterLink],
                        templateUrl: 'partials/albumComponent.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, spotify_service_1.SpotifyService, router_1.LocationStrategy])
                ], AlbumComponent);
                return AlbumComponent;
            }());
            exports_1("AlbumComponent", AlbumComponent);
        }
    }
});

//# sourceMappingURL=album.component.js.map
