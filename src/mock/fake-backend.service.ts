/*
 * Created on Fri May 25 2018
 *
 * @author Capgemini
 *
 * @scope return fake data for testing app without vpn
 *
 * Copyright (c) 2018 Agos
 */

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

/**
 * {@link http://jasonwatmore.com/post/2017/12/15/angular-5-mock-backend-example-for-backendless-development|Example}
 */


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // wrap in delayed observable to simulate server api call
    return Observable.of(null).mergeMap(() => {

     
      // scenario3 detail
      if (request.url.match(/poc-scenario3-customerdata/) && request.method === 'GET') {
        let response = {
          "Envelope": {
            "Body": {
              "GetCustomerDataResponse": {
                "codiceEsito": "OK",
                "listaMessaggi": {
                  "MessaggioSistema-nm": 0
                },
                "indicatorePresenzaDatiErrati": "N",
                "listaArrayDatiErrati": {
                  "arrayDatiErrati-nm": 0
                },
                "datiCliente": {
                  "DatiAnagraficiCliente": {
                    "DS-CITTADINANZA": "ITALIANA",
                    "DS-COGNOME": "VALENTI",
                    "DS-NOME": "GIORGIO"
                  },
                  "DatiNascitaCliente": {
                    "CD-PROV-NASCITA": "PI",
                    "DN-LOCAL-NASCITA": "PISA",
                    "DT-NASCITA": 12031983,
                    "CD-SESSO": "M",
                    "CD-FISCALE": "VLNGRG83C12G702S"
                  },
                  "DatiResidenzaCliente": {
                    "DN-LOCAL-RES": "PISA",
                    "DS-INDIR-RES": "VIA PAVIA 103"
                  },
                  "DatiRecapitiCliente": {
                    "NM-CELLULARE": "347-8854784",
                    "CD-EMAIL": "vg@tin.it"
                  }
                }
              }
            }
          }
        };
        return Observable.of(new HttpResponse({ status: 200, body: response }));
      }

      // scenario7 - get user ABI/CAB data
      if (request.url.match(/login/) && request.method === 'GET') {
        let response = {
          autenticated: true
        }

        return Observable.of(new HttpResponse({ status: 200, body: response }));
      }
      

      // pass through any requests not handled above
      return next.handle(request);

    })

      // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};