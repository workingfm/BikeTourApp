import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  login(user: any) {
    console.log("Call login provider");
    const headers = new HttpHeaders({});
    const params = new HttpParams(user);
    let url = "login";
    return this.http.get(url, {
      params: params,
      headers: headers
    })
    //.map((res: Response) => res)

  }

}
