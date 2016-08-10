System.register(['angular2/http', 'angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var SpotifyService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            SpotifyService = (function () {
                function SpotifyService(_http) {
                    this._http = _http;
                    this.base_url = "https://api.spotify.com/v1";
                }
                SpotifyService.prototype.query = function (url, params) {
                    var qUrl = "" + this.base_url + url;
                    if (params)
                        qUrl = qUrl + "?" + params.join("&");
                    console.log(qUrl);
                    return this._http.request(qUrl).map(function (res) { return res.json(); });
                };
                SpotifyService.prototype.search = function (query, type) {
                    var params = [
                        ("q=" + query),
                        ("type=" + type),
                        'market=US '];
                    return this.query('/search', params);
                };
                SpotifyService.prototype.searchTrack = function (query) {
                    return this.search(query, 'track');
                };
                SpotifyService.prototype.getTrack = function (id) {
                    return this.query("/tracks/" + id);
                };
                SpotifyService.prototype.getAlbum = function (id) {
                    return this.query("/albums/" + id);
                };
                SpotifyService.prototype.getArtist = function (id) {
                    return this.query("/artists/" + id);
                };
                SpotifyService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SpotifyService);
                return SpotifyService;
            }());
            exports_1("SpotifyService", SpotifyService);
        }
    }
});

//# sourceMappingURL=spotify.service.js.map
