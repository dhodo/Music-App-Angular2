import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES,RouteConfig} from 'angular2/router';
import {SearchComponent} from './search.component';
import {ArtistComponent} from './artist.component';
import {AlbumComponent} from './album.component';
import {TrackComponent} from './track.component';
@Component({
    selector:'my-app',
    directives:[ROUTER_DIRECTIVES],
    template:`
        <div class="app">
            <div class="back" >
            </div >
            
            <router-outlet></router-outlet>
            
        </div>

    `
})
@RouteConfig([
    {path:'/',name:'root',redirectTo:['Search'] },
    {path:'/search',name:'Search',component:SearchComponent},
    {path:'/artist:id',name:'Artists',component:ArtistComponent},
    {path:'/album:id',name:'Albums',component:AlbumComponent},
    {path:'/track:id',name:'Tracks',component:TrackComponent}

    
])
export class AppComponent
{

}