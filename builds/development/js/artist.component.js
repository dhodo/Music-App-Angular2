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
    var ArtistComponent;
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
            ArtistComponent = (function () {
                function ArtistComponent(_spotify, _routeParams, _locationstrategy) {
                    this._spotify = _spotify;
                    this._routeParams = _routeParams;
                    this._locationstrategy = _locationstrategy;
                    this.id = this._routeParams.get("id");
                }
                ArtistComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._spotify.getArtist(this.id).subscribe(function (res) { return _this.renderArtist(res); });
                };
                ArtistComponent.prototype.renderArtist = function (result) {
                    this.artist = result;
                };
                ArtistComponent.prototype.back = function () {
                    this._locationstrategy.back();
                };
                ArtistComponent = __decorate([
                    core_1.Component({
                        selector: 'album',
                        directives: [common_1.CORE_DIRECTIVES],
                        templateUrl: 'partials/artist.html'
                    }), 
                    __metadata('design:paramtypes', [spotify_service_1.SpotifyService, router_1.RouteParams, router_1.LocationStrategy])
                ], ArtistComponent);
                return ArtistComponent;
            }());
            exports_1("ArtistComponent", ArtistComponent);
        }
    }
});

//# sourceMappingURL=artist.component.js.map
