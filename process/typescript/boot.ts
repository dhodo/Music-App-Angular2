import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {SpotifyService } from './services/spotify.service';
import { HTTP_PROVIDERS } from 'angular2/http';
import {ROUTER_PROVIDERS,LocationStrategy,HashLocationStrategy} from 'angular2/router';
bootstrap (AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS, provide(SpotifyService, {useClass: SpotifyService}),provide(LocationStrategy, {useClass:HashLocationStrategy})]);

