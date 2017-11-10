import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Config } from '../config/index';
import { Main } from './main.model';

@Injectable()
export class MainService {
  private directivesUrl = '/lists';

  constructor(private http: Http) { }

  getDirectives(project: string): Promise<Response> {
    const url = `${Config.API_PREFIX}${this.directivesUrl}/${project}`;
    return this.http.get(url)
      .toPromise()
      .catch(this.handleError);
  }

  setDirectives(files: any): Promise<Response> {
    const headers = new Headers({ 'Content-Type': 'application/json' }); // Default type: json
    const options = new RequestOptions({ headers: headers });
    const body = {};
    const url = `${Config.API_PREFIX}${this.directivesUrl}`;
    return this.http.post(url, body, options)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
