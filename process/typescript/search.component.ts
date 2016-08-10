import {Component,OnInit,ViewChildren,Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router, RouterLink, RouteParams } from 'angular2/router';

import {SpotifyService } from './services/spotify.service';

@Component(
    {
        selector:'search',
        directives:[RouterLink, CORE_DIRECTIVES],
        templateUrl:'partials/searchComponent.html',
        
    }
)
export class SearchComponent implements OnInit
{
    query:string;
    results:Object;
    searchRequired:boolean;
    @ViewChildren('newquery') vc;
    constructor(public spotify:SpotifyService, public router:Router, public routeParams:RouteParams)
    {
        this.searchRequired=false;
        
    }
    ngOnInit()
    {
        this.search();
    }
    searchreq()
    {
        this.searchRequired=true; 
        console.log(this.vc);      
    }
    search():void{
        
        let query = this.routeParams.get("query");
        this.query=query;
        if (!query)
        {
            return;
        }
        this.spotify.searchTrack(query).subscribe(
            (res:any) => this.renderResults(res)
        );
    }

    renderResults(res:any):void{
        this.results=null;
        if (res && res.tracks && res.tracks.items)
        {
            this.results=res.tracks.items;
        }
    }

    submit(query:string):void
    {
        this.query=query;
        this.router.navigate(['/Search',{query:query}])
        this.search();
    }

} 