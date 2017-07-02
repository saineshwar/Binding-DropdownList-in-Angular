import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CountryDataService
{
    private actionUrl: string;
    constructor(private _http: Http)
    {
        this.actionUrl = 'http://localhost:61384/api/CountryAPI/';
    }

    public GetAllCountry = (): Observable<any> =>
    {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <any>response.json());

    }
}
