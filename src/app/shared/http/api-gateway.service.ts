import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * This service will provide common entry/exit door to all external API's(REST)
 * it also provide abstraction to domain core servies, if required we can change some logic
 * here to get the data from other source i.e localstorage or WebSocket without changing the
 * domain/functional services
 */

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  
    baseApiUrl:String;
  /**
   * Required services injected.
   * @param http :HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * perform a GET request to the API, appending the given params
   * as URL search parameters. Returns an Observable stream.
   */
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.baseApiUrl}${path}`, { params });
  }

  /**
   * perform a POST request to the API. Returns an Observable stream.
   */

  post(path: string, body: any): Observable<any> {
    const reqOptions: object = { observe: 'response', responseType: 'text', withCredentials: false };

    return this.http.post(`${this.baseApiUrl}${path}`, body, reqOptions);
  }
  /**
   * perform a PUT request to the API. Returns an Observable stream.
   */
  put(path: string, body: any): Observable<any> {
    const reqOptions: object = { observe: 'response', responseType: 'text', withCredentials: false };

    return this.http.put(`${this.baseApiUrl}${path}`, body, reqOptions);
  }
  /**
   * perform a DELETE request to the API. Returns an Observable stream.
   */

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}${path}`, { params });
  }

 
}
