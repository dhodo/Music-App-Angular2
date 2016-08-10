import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LocationStrategy, RouterLink, RouteParams } from 'angular2/router';
import {SpotifyService} from './services/spotify.service';
@Component({
    selector:'album',
    directives:[CORE_DIRECTIVES],
    templateUrl:'partials/artist.html'
})
export class ArtistComponent implements OnInit
{
    id:string;
    artist:Object;
    constructor(public _spotify:SpotifyService, public _routeParams:RouteParams, public _locationstrategy:LocationStrategy )
    {
        this.id=this._routeParams.get("id");
    }
    
    ngOnInit()
    {   
        this._spotify.getArtist(this.id).subscribe(
            (res:any) => this.renderArtist(res)
        );
    }
    renderArtist(result:any):void
    {
        this.artist=result;
    }
    back()
    {
        this._locationstrategy.back();
    }
}