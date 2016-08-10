import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {LocationStrategy, RouterLink, RouteParams } from 'angular2/router';
import {SpotifyService} from './services/spotify.service';
@Component({
    selector:'album',
    directives:[CORE_DIRECTIVES,RouterLink],
    templateUrl:'partials/albumComponent.html'
})
export class AlbumComponent implements OnInit
{
    album:Object;
    id:string;
    constructor(public _routeParams:RouteParams,public _spotify:SpotifyService,public _locationstrategy:LocationStrategy){
        console.log("Constructor");
    }

    ngOnInit()
    {
        console.log("In ngOnInit");
        this.id = this._routeParams.get("id");
        if (! this.id)
        {
            console.log( "ID IS NULL");
            return
        }
        this._spotify.getAlbum(this.id).subscribe
        (
            (res:any) => this.renderAlbum(res)
        );
    }
    back():void{
        this._locationstrategy.back();
    }

    renderAlbum(res:any)
    {
        this.album=res;
    }

}