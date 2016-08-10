import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LocationStrategy, RouterLink, RouteParams } from 'angular2/router';
import {SpotifyService} from './services/spotify.service';
@Component({
    selector:'track-comp',
    directives:[CORE_DIRECTIVES],
    templateUrl:'partials/trackComponent.html'
})
export class TrackComponent
{
    id:string;
    track:Object;
    constructor(public _spotify:SpotifyService, public _routeParams:RouteParams, public _locationstrategy:LocationStrategy )
    {
        this.id=this._routeParams.get("id");
    }
    
    ngOnInit()
    {   
        this._spotify.getTrack(this.id).subscribe(
            (res:any) => this.renderArtist(res)
        );
    }
    renderArtist(result:any):void
    {
        this.track=result;
    }
    back()
    {
        this._locationstrategy.back();
    }
}