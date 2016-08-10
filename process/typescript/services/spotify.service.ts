import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';
@Injectable()
export class SpotifyService
{
    base_url:string="https://api.spotify.com/v1";
    constructor(private _http:Http)
    {

    }
    query(url:string ,params?:Array<string>)
    {
        let qUrl=`${this.base_url}${url}`;
        if (params)
            qUrl=`${qUrl}?${params.join("&")}`;
            console.log(qUrl);
        return this._http.request(qUrl).map(
            (res:any)=> res.json()
        );
    }

    search(query:string,type:string):Observable<any[]>
    {
        let params:string[]=[
            `q=${query}`,
            `type=${type}`,
            'market=US '];
        return this.query('/search',params);
    }

    searchTrack(query:string):Observable<any[]>
    {
        return this.search(query,'track');
    }

    getTrack(id:string):Observable<any[]>
    {
        return this.query(`/tracks/${id}`);
    }

    getAlbum(id:string):Observable<any[]>
    {
        return this.query(`/albums/${id}`);
    }
    getArtist(id:string):Observable<any[]>
    {
        return this.query(`/artists/${id}`);
    }
}